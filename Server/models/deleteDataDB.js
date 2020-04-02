const connection = require("./connectDB").connection

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