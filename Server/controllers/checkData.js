const DB = require("../models/checkDataDB")

const checkData = async (req, res) => {
    const table = req.body.table
    const elKey = req.body.key
    const value = req.body[elKey]
    await DB.checkData(table, elKey, value, res)
  }

  exports.checkData = checkData