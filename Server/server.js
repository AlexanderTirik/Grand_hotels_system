const express = require("express")
const cors = require("cors")
const app = express()

app.listen(3001, () => console.log("Server ready"))

const dataBase = require("./dataBases/dataBases.js")

app.options("*", cors())

app.use(express.json())

app.post("/insertdata", cors(), (req, res) => {
  table = req.body.where
  info = req.body.info
  dataBase.insertData(table, info)
})

app.post("/showdata", cors(), (req, res) => {
  table = req.body.table
  dataBase.showData(table,res);
})

app.post("/showdatacolumns", cors(), (req, res) => {
  table = req.body.table
  dataBase.showDataColumns(table,res);
})
