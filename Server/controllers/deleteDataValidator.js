const { check,oneOf } = require("express-validator")

const deleteDataValidator = oneOf([
  check("info.id")
    .exists()
    .isInt()
])

exports.deleteDataValidator = deleteDataValidator
