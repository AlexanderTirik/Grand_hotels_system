import React from "react"
import { useState } from "react"

const Button = {
  border: "2px solid #c2b0b6",
  borderRadius: "5%",
  margin: "5px",
  backgroundColor: "#754857",
  color: "#f5dfe6",
  fontSize: "1.5vw"
}

const Label = {
  fontSize: "2vw",
  color: "#754857",
}


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
      <div style={Label}>Send excel</div>
      <form>
        <input type="file" onChange={handleFile} accept="iapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheetmage/*"/>
        <button onClick={submitClick} style={Button}>Send excel</button>
      </form>
    </div>
  )
}
