app.post("/saveimage/:table", cors(), async (req, res) => {
    image = req.files.picture
    const path = "images/" + `${req.params.table}/` + image.name
  
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
  })
  
  app.get("/getimage/:type/:name", cors(), async (req, res) => {
    const file =
      __dirname + "/images/" + `${req.params.type}/` + `${req.params.name}.jpg`
  
    res.sendFile(file)
  })