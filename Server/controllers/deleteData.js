const DB = require("../models/deleteDataDB")
const { validationResult } = require("express-validator")

const deleteData = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const table = req.body.table
  const id = req.body.info.id
  await DB.deleteData(table, id)
}

exports.deleteData = deleteData
