const axios = require("axios")

const getUserByEmail = async email => {
  const request = await axios.post("http://127.0.0.1:3001/checkdata", {
    table: "clients",
    key: "email",
    email: email
  })
  if (request.data === null) return await null
  const user = await request.data.result[0]
  return await user
}
 
exports.getUserByEmail = getUserByEmail
