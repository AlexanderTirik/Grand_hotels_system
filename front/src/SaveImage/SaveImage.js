import React from "react"
import { useState } from "react"

const Button = {
  border: "2px solid #c2b0b6",
  borderRadius: "5%",
  margin: "5px",
  backgroundColor: "#754857",
  color: "#f5dfe6",
  fontSize: "1.5vw",
}

const Div = {
  margin: "5px 1px",
}

export default function SaveImage(props) {
  const [image, setImage] = useState()

  const submitClick = () => {
    const options = {
      method: "POST",
      body: image,
    }
    ;(async () => {
      const response = await fetch(
        `http://127.0.0.1:3001/saveimage/${props.table}`,
        options
      )
    })()
  }

  const handleFile = (event) => {
    const img = event.target.files[0]
    const formData = new FormData()
    formData.append("picture", img)
    setImage(formData)
  }

  return (
    <div style={Div}>
      <form>
        <input type="file" onChange={handleFile} accept="image/*" />
        <button onClick={submitClick} style={Button}>Send image</button>
      </form>
    </div>
  )
}
