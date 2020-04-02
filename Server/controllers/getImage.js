const getImage = async (req, res) => {
  const file =
  process.cwd()+"/public/images/" + `${req.params.type}/` + `${req.params.name}.jpg`

  res.sendFile(file)
}

exports.getImage = getImage
