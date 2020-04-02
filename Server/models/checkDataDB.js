const connection = require("./connectDB").connection

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
  
      if (result[0] === undefined) res.send(JSON.stringify(null))
      else res.send(JSON.stringify({result}))
    })
  }
  
  exports.checkData = checkData