const { check } = require("express-validator")

const newUserValidator = [
  check("first_name")
    .exists()
    .isLength({ min: 1, max: 20 }),
  check("second_name")
    .exists()
    .isLength({ min: 1, max: 20 }),
  check("email")
    .exists()
    .isEmail(),
  check("password").exists()
]

exports.newUserValidator = newUserValidator
