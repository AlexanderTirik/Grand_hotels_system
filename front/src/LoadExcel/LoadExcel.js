import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"

export default function SaveImage(props) {
  const [excel, setExcel] = useState()

  const submitClick = () => {
    const options = {
      method: "POST",
      body: excel,
    }
    ;(async () => {
      const response = await fetch(`http://127.0.0.1:3001/excel/${props.mode}/${props.table}`, options)
    })()
  }
  
  const handleFile = event => {
    const img = event.target.files[0]
    const formData = new FormData()
    formData.append("excel", img)
    setExcel(formData)
  }

  

  return (
    <div>
      <form>
        <input type="file" onChange={handleFile} accept="iapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheetmage/*"/>
        <button onClick={submitClick}>Submit</button>
      </form>
    </div>
  )
}
