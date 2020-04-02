const express = require("express")
const app = express()

app.listen(3001, () => console.log("Server ready"))

app.use(express.json())

require("./routes/routes")(app)
