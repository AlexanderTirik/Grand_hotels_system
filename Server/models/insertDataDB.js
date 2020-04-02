const connection = require("./connectDB").connection

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