const DB = require("../models/updateDataDB")
const { validationResult } = require("express-validator")

const updateData = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return await res.status(422).json({ errors: errors.array() })
  }

  const table = req.body.table
  const query = req.body.info
  const id = query.id
  DB.updateData(table, query, id)
}

exports.updateData = updateData
