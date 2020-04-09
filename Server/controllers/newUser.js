const bcrypt = require("bcrypt")
const { validationResult } = require("express-validator")
const getUserByEmail = require("../util/getUserByEmail").getUserByEmail
const insertData = require("../models/insertDataDB").insertData

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
      const status = await getUserByEmail(user.email)
      
      if (status !== null)
        return res.status(205).json({ errors: "Email is already registered" })
      else {
        insertData("clients", user)
        return res.status(200).json({ errors: "None" })
      }

  } catch {
    res.status(422).json({ errors: "error in the process of creating a user" })
  }
}

exports.newUser = newUser
