import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"

export default function SaveImage(props) {
  const [image, setImage] = useState()

  const submitClick = () => {
    const options = {
      method: "POST",
      body: image,
    }
    ;(async () => {
      const response = await fetch(`http://127.0.0.1:3001/saveimage/${props.table}`, options)
    })()
  }
  
  const handleFile = event => {
    const img = event.target.files[0]
    const formData = new FormData()
    formData.append("picture", img)
    setImage(formData)
  }

  

  return (
    <div>
      <form>
        <input type="file" onChange={handleFile} accept="image/*"/>
        <button onClick={submitClick}>Submit</button>
      </form>
    </div>
  )
}
