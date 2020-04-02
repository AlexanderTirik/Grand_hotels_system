const { oneOf, check } = require("express-validator")

const insertDataValidator =
  oneOf([
    [
      check("info.hotel_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.stars")
        .exists()
        .isInt({ min: 1, max: 5 })
    ],
    [
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.hotel_id")
        .exists()
        .isInt(),
      check("info.position_id")
        .exists()
        .isInt()
    ],
    check("info.position_name")
      .exists()
      .isLength({ min: 1, max: 20 }),
    [
      check("info.hotel_id")
        .exists()
        .isInt(),
      check("info.number")
        .exists()
        .isInt(),
      check("info.class_id")
        .exists()
        .isInt(),
      check("info.capacity")
        .exists()
        .isInt({ min: 1, max: 6 }),
      check("info.price")
        .exists()
        .isInt({ min: 1 })
    ],
    [
      check("info.class_name")
        .exists()
        .isLength({ min: 1, max: 20 })
    ],
    [
      (check("info.visitor_id")
        .exists()
        .isInt(),
      check("info.room_id")
        .exists()
        .isInt(),
      check("info.start_date")
        .exists()
        .isISO8601(),
      check("info.end_date")
        .exists()
        .isISO8601())
    ],
    [
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.phone_number")
        .exists()
        .isMobilePhone()
    ],
    [
      check("info.first_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.second_name")
        .exists()
        .isLength({ min: 1, max: 20 }),
      check("info.email")
        .exists()
        .isEmail(),
      check("info.password")
        .exists()
        .isHash()
    ]
  ])

exports.insertDataValidator = insertDataValidator
