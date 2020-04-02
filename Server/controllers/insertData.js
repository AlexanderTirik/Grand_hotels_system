const DB = require("../models/insertDataDB")
const { validationResult } = require("express-validator")

const insertData = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return await res.status(422).json({ errors: errors.array() })
  }
  const table = req.body.table
  const info = req.body.info

  await DB.insertData(table, info)
}

exports.insertData = insertData
