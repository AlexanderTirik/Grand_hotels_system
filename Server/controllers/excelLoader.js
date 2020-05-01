const readXlsxFile = require("read-excel-file/node")
const fs = require("fs")
const axios = require("axios")

const excelLoader = async (req, res) => {
  const excel = req.files.excel
  const path = "../server/public/excels/" + excel.name
  excel.mv(path, (error) => {
    if (error) {
      console.error(error)
      res.writeHead(500, {
        "Content-Type": "application/json",
      })
      res.end(JSON.stringify({ status: "error", message: error }))
      return
    }

    res.writeHead(200, {
      "Content-Type": "application/json",
    })
    res.end(
      JSON.stringify({ status: "success", path: "/excels/" + excel.name })
    )
  })
  const file = process.cwd() + "/public/excels/" + excel.name
  const mode = req.params.mode
  const table = req.params.table
  const requestShowDataColumns = await axios.post(
    "http://127.0.0.1:3001/showdatacolumns",
    {
      table: table,
    }
  )
  const headers = requestShowDataColumns.data.map((el) => {
    return Object.values(el)[0]
  })

  fs.access(file, fs.F_OK, (err) => {
    if (err) {
      return
    }

    readXlsxFile(file).then((rows) => {
      rows.forEach((data) => {
        let info = {}
        data.forEach((el, i) => {
          if (mode == "insert") i = i + 1
          if (mode == "delete") i = 0
          info[headers[i]] = el
        })
        if (mode == "insert") {
          const requestInsert = axios.post("http://127.0.0.1:3001/insertdata", {
            table: table,
            info: info,
          })
        }
        if (mode == "update") {
          const requestUpdate = axios.post("http://127.0.0.1:3001/updatedata", {
            table: table,
            info: info,
            id: info.id,
          })
        }
        if (mode == "delete") {
          const requestDelete = axios.post("http://127.0.0.1:3001/deletedata", {
            table: table,
            info: info,
          })
        }
      })
    })
  })
}

exports.excelLoader = excelLoader
