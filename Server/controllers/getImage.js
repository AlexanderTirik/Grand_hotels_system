const getImage = async (req, res) => {
  const fs = require("fs")
  const file =
    process.cwd() +
    "/public/images/" +
    `${req.params.type}/` +
    `${req.params.name}.jpg`

  fs.access(file, fs.F_OK, err => {
    if (err) {
      const standart =
        process.cwd() +
        "/public/images/" +
        `${req.params.type}/` +
        `standart.jpg`
      res.sendFile(standart)
      return
    }
    res.sendFile(file)
  })
}

exports.getImage = getImage
