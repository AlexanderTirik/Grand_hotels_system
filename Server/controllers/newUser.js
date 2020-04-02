const bcrypt = require("bcrypt")
const { validationResult } = require("express-validator")
const axios = require("axios")

const newUser = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = {
      first_name: req.body.first_name,
      second_name: req.body.second_name,
      email: req.body.email,
      password: hashedPassword,
      role: "visitor"
    }
    const isEmailExists = async () => {
      return await axios.post("http://127.0.0.1:3001/checkdata", {
        table: "clients",
        key: "email",
        email: user.email
      })
    }
    ;(async () => {
      const status = await isEmailExists()

      if (status.data !== null)
        return res.status(205).json({ errors: "Email is already registered" })
      else {
        dataBase.insertData("clients", user)
        return res.status(200).json({ errors: "None" })
      }
    })()
  } catch {
    res.status(422).json({ errors: "error in the process of creating a user" })
  }
}

exports.newUser = newUser
