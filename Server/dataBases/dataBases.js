const mysql = require("mysql")

const options = {
  user: "root",
  password: "Admin1",
  database: "grand_hotel_systems"
}

const connection = mysql.createConnection(options)

connection.connect(err => {
  if (err) {
    console.error("An error occurred while connecting to the DB")
    throw err
  }
})

const insertData = async (table, info) => {
  const queryInfo = [table, info]
  connection.query(
    "INSERT INTO ?? SET ?",
    queryInfo,
    (error, result, fields) => {
      if (error) {
        console.error("An error occurred while executing the INSERT query")
        throw error
      }
    }
  )
}

exports.insertData = insertData

const showData = async (table, res) => {
  connection.query("SELECT * FROM ??", table, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the SELECT query.")
      throw error
    }

    res.send(JSON.stringify(result))
  })
}

exports.showData = showData

const showDataColumns = async (table, res) => {
  const query = `
  SELECT COLUMN_NAME
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_NAME = ?
  ORDER BY ORDINAL_POSITION
  `
  connection.query(query, table, (error, result, fields) => {
    if (error) {
      console.error(
        "An error occurred while executing the SELECT COLUMN_NAME query."
      )
      throw error
    }
    res.send(JSON.stringify(result))
  })
}

exports.showDataColumns = showDataColumns

const checkData = async (table, key, value, res) => {
  const queryInfo = [table, key, value]

  const query = `
  SELECT * FROM ??
  WHERE ?? = ?
  `
  connection.query(query, queryInfo, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the CHECK query.")
      throw error
    }

    if (result[0] != undefined) res.send(JSON.stringify({ status: true }))
    else res.send(JSON.stringify({ status: false }))
  })
}

exports.checkData = checkData

const deleteData = async (table, id) => {
  const queryInfo = [table, id]

  const query = `
  DELETE FROM ??
  WHERE id = ?
  `
  connection.query(query, queryInfo, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the DELETE query.")
      throw error
    }
  })
}

exports.deleteData = deleteData

const updateData = async (table, info, id) => {
  const queryInfo = [table, info, id]

  const query = `
  UPDATE ??
  SET ?
  WHERE id = ?
  `
  connection.query(query, queryInfo, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the UPDATE query.")
      throw error
    }
  })
}

exports.updateData = updateData
