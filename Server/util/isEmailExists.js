const axios = require("axios")

const isEmailExists = async email => {
  return await axios.post("http://127.0.0.1:3001/checkdata", {
    table: "clients",
    key: "email",
    email: email
  })
}

exports.isEmailExists = isEmailExists
