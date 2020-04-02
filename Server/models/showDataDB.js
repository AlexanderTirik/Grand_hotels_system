const connection = require("./connectDB").connection

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