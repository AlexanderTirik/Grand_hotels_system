const jwt = require("jsonwebtoken")

const isAdmin = async (req, res) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

    if (user.role === "admin") {
      res.status(200)
      return res.json({ errors: "none" })
    }
    if (err) {
      res.status(403)
      return res.json({ errors: err })
    }
    res.status(403)
    return res.json({ errors: "not admin" })
  })
}

exports.isAdmin = isAdmin
