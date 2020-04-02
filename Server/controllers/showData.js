const DB = require("../models/showDataDB")

const showData = async (req, res) => {
  const table = req.body.table
  await DB.showData(table, res)
}

exports.showData = showData
