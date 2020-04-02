const { check } = require("express-validator")

const deleteDataValidator = [
  check("info.id")
    .exists()
    .isInt()
]

exports.deleteDataValidator = deleteDataValidator
