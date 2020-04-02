const saveImage = async (req, res) => {
  image = req.files.picture
  const path = "../server/public/images/" + `${req.params.table}/` + image.name

  image.mv(path, error => {
    if (error) {
      console.error(error)
      res.writeHead(500, {
        "Content-Type": "application/json"
      })
      res.end(JSON.stringify({ status: "error", message: error }))
      return
    }

    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.end(
      JSON.stringify({ status: "success", path: "/images/" + image.name })
    )
  })
}

exports.saveImage = saveImage
