const getUserByEmail = require("../util/getUserByEmail").getUserByEmail
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const userFromDB = await getUserByEmail(email)
    if (userFromDB === null) res.status(401).json({errors:"False email"})
    const user = { email: email, password: password, role: userFromDB.role }
    if (await bcrypt.compare(user.password, userFromDB.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      res.status(200)
      res.json({ accessToken: accessToken })
    } else {
      res.status(401).json({errors:"False password"})
    }
}

exports.login = login