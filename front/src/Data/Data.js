import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { ButtonGroup, Button } from "react-bootstrap"
import ShowData from "../ShowData/ShowData.js"

export default function Data() {
  const [table, setTalbe] = useState("hotels")
  const [headers, setHeaders] = useState([])
  
  useEffect(() => {
    const options = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify({
        table: table
      })
    }
    ;(async () => {
      const response = await fetch("http://127.0.0.1:3001/showdatacolumns", options)
      const headers = await response.json()
      setHeaders(headers)
    })()
  })


  return (
    <React.Fragment>
      <div className="d-flex flex-column">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button onClick={() => setTalbe("hotels")}>Hotels</Button>
          <Button onClick={() => setTalbe("members")}>Members</Button>
          <Button onClick={() => setTalbe("positions")}>Positions</Button>
          <Button onClick={() => setTalbe("rooms")}>Rooms</Button>
          <Button onClick={() => setTalbe("classes")}>Classes</Button>
          <Button onClick={() => setTalbe("felicites")}>Felicites</Button>
          <Button onClick={() => setTalbe("visits")}>Visits</Button>
          <Button onClick={() => setTalbe("visitors")}>Visitors</Button>
        </ButtonGroup>
      </div>
      {/* <InsertData headers = {headers}/> */}
      <ShowData table = {table} headers = {headers}/>
    </React.Fragment>
  )
}
