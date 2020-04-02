if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
  }
  
  const mysql = require("mysql")
  
  const options = {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  }
  
  
  const connection = mysql.createConnection(options)
  
  connection.connect(err => {
    if (err) {
      console.error("An error occurred while connecting to the DB")
      throw err
    }
  })
 
  exports.connection = connection