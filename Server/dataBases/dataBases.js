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

const insertData = (table, info) => {
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

const showData = (table, res) => {
  connection.query("SELECT * FROM ??", table, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the SELECT query.")
      throw error
    }
    
    res.send(JSON.stringify(result))
  })
}

exports.showData = showData

const showDataColumns = (table, res) => {
  const query = `
  SELECT COLUMN_NAME
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_NAME = ?
  ORDER BY ORDINAL_POSITION
  `
  connection.query(query, table, (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the SELECT COLUMN_NAME query.")
      throw error
    }
    res.send(JSON.stringify(result))
  })
}

exports.showDataColumns = showDataColumns
