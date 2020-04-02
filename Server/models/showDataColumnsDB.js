const connection = require("./connectDB").connection

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
  