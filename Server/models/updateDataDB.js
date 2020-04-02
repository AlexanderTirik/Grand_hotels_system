const connection = require("./connectDB").connection

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