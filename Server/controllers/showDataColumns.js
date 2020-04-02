const DB = require("../models/showDataColumnsDB")

const showDataColumns = async (req, res) => {
  const table = req.body.table
  DB.showDataColumns(table, res)
}

exports.showDataColumns = showDataColumns
