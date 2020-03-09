const express = require("express")
const cors = require("cors")
const { check, oneOf, validationResult } = require("express-validator")
const fileUpload = require("express-fileupload")
const app = express()

app.listen(3001, () => console.log("Server ready"))

const dataBase = require("./dataBases/dataBases.js")

app.options("*", cors())

app.use(express.json())
app.use(fileUpload())

app.post(
  "/insertdata",
  oneOf([
    [
      check("info.hotel_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.stars")
        .exists()
        .isInt({ min: 1, max: 5 })
    ],
    [
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.hotel_id")
        .exists()
        .isInt(),
      check("info.position_id")
        .exists()
        .isInt()
    ],
    check("info.position_name")
      .exists()
      .isLength({ min: 1, max: 20 }),
    [
      check("info.hotel_id")
        .exists()
        .isInt(),
      check("info.number")
        .exists()
        .isInt(),
      check("info.class_id")
        .exists()
        .isInt(),
      check("info.capacity")
        .exists()
        .isInt({ min: 1, max: 6 }),
      check("info.price")
        .exists()
        .isInt({ min: 1 })
    ],
    [
      check("info.class_name")
        .exists()
        .isLength({ min: 1, max: 20 })
    ],
    [
      (check("info.visitor_id")
        .exists()
        .isInt(),
      check("info.room_id")
        .exists()
        .isInt(),
      check("info.start_date")
        .exists()
        .isISO8601(),
      check("info.end_date")
        .exists()
        .isISO8601())
    ],
    [
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.phone_number")
        .exists()
        .isMobilePhone()
    ]
  ]),
  cors(),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    console.log(req.body.info)
    const table = req.body.table
    const info = req.body.info

    dataBase.insertData(table, info)
  }
)

app.post("/showdata", cors(), (req, res) => {
  const table = req.body.table
  dataBase.showData(table, res)
})

app.post("/showdatacolumns", cors(), (req, res) => {
  const table = req.body.table
  dataBase.showDataColumns(table, res)
})

app.post("/checkdata", cors(), (req, res) => {
  const table = req.body.table
  const elKey = req.body.key
  const value = req.body[elKey]
  dataBase.checkData(table, elKey, value, res)
})

app.post(
  "/deletedata",
  [
    check("info.id")
      .exists()
      .isInt()
  ],
  cors(),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const table = req.body.table
    const id = req.body.info.id
    dataBase.deleteData(table, id)
  }
)

app.post(
  "/updatedata",
  oneOf([
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.hotel_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.stars")
        .exists()
        .isInt({ min: 1, max: 5 }),
      check("info.img")
        .exists()
        .isDataURI()
    ],
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.hotel_id")
        .exists()
        .isInt(),
      check("info.position_id")
        .exists()
        .isInt()
    ],
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.position_name")
        .exists()
        .isLength({ min: 1, max: 20 })
    ],
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.hotel_id")
        .exists()
        .isInt(),
      check("info.number")
        .exists()
        .isInt(),
      check("info.class_id")
        .exists()
        .isInt(),
      check("info.capacity")
        .exists()
        .isInt({ min: 1, max: 6 }),
      check("info.price")
        .exists()
        .isInt({ min: 1 })
    ],
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.class_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.img")
        .exists()
        .isDataURI()
    ],
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.visitor_id")
        .exists()
        .isInt(),
      check("info.room_id")
        .exists()
        .isInt(),
      check("info.start_date")
        .exists()
        .isISO8601(),
      check("info.end_date")
        .exists()
        .isISO8601()
    ],
    [
      check("info.id")
        .exists()
        .isInt(),
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.phone_number")
        .exists()
        .isMobilePhone()
    ]
  ]),
  cors(),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const table = req.body.table
    const query = req.body.info
    const id = query.id
    dataBase.updateData(table, query, id)
  }
)

app.post("/saveimage/:table", cors(), (req, res) => {
  image = req.files.picture
  const path = "images/" + `${req.params.table}/` + image.name

  image.mv(path, error => {
    if (error) {
      console.error(error)
        res.writeHead(500, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ status: 'error', message: error }))
        return
      }

      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ status: 'success', path: '/images/' + image.name }))
    })
  })

app.get("/getimage/:type/:name", cors(), (req,res) => {
  const file = __dirname + "/images/" + `${req.params.type}/` + `${req.params.name}.jpg`
  
  res.sendFile(file)
})
