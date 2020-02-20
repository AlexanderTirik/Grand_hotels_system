const express = require("express")
const cors = require("cors")
const { check, validationResult } = require("express-validator")
const app = express()

app.listen(3001, () => console.log("Server ready"))

const dataBase = require("./dataBases/dataBases.js")

app.options("*", cors())

app.use(express.json())

app.post("/insertdata", cors(), (req, res) => {
  const table = req.body.table
  const info = req.body.info
  dataBase.insertData(table, info)
})

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

app.post("/deletedata", cors(), (req, res) => {
  const table = req.body.table
  const id = req.body.info.id
  dataBase.deleteData(table, id)
})

app.post("/updatedata", cors(), (req, res) => {
  const table = req.body.table
  const query = req.body.info
  const id = query.id
  dataBase.updateData(table, query, id)
})
