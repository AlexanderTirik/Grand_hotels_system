if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

module.exports = function (app) {
  const cors = require("cors")
  const fileUpload = require("express-fileupload")
  const authentificateAdminToken = require("../middlewares/authentificateAdminToken")
    .authentificateAdminToken
  const authentificateToken = require("../middlewares/authentificateToken")
    .authentificateToken

  app.options("*", cors())
  const insertDataValidator = require("../controllers/insertDataValidator")
    .insertDataValidator
  const insertData = require("../controllers/insertData").insertData

  app.post(
    "/insertdata",
    insertDataValidator,
    cors(),
    insertData
  )

  const showData = require("../controllers/showData").showData

  app.post("/showdata", cors(), showData)

  const showDataColumns = require("../controllers/showDataColumns")
    .showDataColumns

  app.post("/showdatacolumns", cors(), showDataColumns)

  const checkData = require("../controllers/checkData").checkData

  app.post("/checkdata", cors(), checkData)

  const deleteDataValidator = require("../controllers/deleteDataValidator")
    .deleteDataValidator
  const deleteData = require("../controllers/deleteData").deleteData

  app.post(
    "/deletedata",
    deleteDataValidator,
    cors(),
    deleteData
  )

  const updateDataValidator = require("../controllers/updateDataValidator")
    .updateDataValidator
  const updateData = require("../controllers/updateData").updateData

  app.post(
    "/updatedata",
    updateDataValidator,
    cors(),
    updateData
  )

  const saveImage = require("../controllers/saveImage").saveImage

  app.use(fileUpload())

  app.post("/saveimage/:table", authentificateAdminToken, cors(), saveImage)

  const getImage = require("../controllers/getImage").getImage

  app.get("/getimage/:type/:name", cors(), getImage)

  const newUserValidator = require("../controllers/newUserValidator")
    .newUserValidator

  const newUser = require("../controllers/newUser").newUser

  app.post("/newUser", newUserValidator, cors(), newUser)

  const login = require("../controllers/login").login
  app.post("/login", cors(), login)

  const isAdmin = require("../controllers/isAdmin").isAdmin
  app.post("/isAdmin", cors(), isAdmin)

  const excelLoader = require("../controllers/excelLoader").excelLoader
  app.post("/excel/:mode/:table", cors(), excelLoader)
}
