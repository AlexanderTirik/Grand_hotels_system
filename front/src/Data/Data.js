import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import styled from "styled-components"
import ShowData from "../ShowData/ShowData.js"
import InsertData from "../InsertData/InsertData.js"
import DeleteData from "../DeleteData/DeleteData.js"
import UpdateData from "../UpdateData/UpdateData.js"
import SaveImage from "../SaveImage/SaveImage.js"
import LoadExcel from "../LoadExcel/LoadExcel.js"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})

const Div = styled.div`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  color: #f54857;
  background-color: #f5dfe6;
`
const Button = styled.button`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  margin: 0 3px;
  text-decoration: none;
  color: #754857;
  letter-spacing: 2px;
  font-weight: 500;
  background-color: #f5dfe6;
  padding: 10px;
  border: dotted 2px #c2b0b6;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`
const LabelImage = styled.div`
  text-align:center;
  font-size: 2vw;
  color: #754857;
`
export default function Data() {
  const [table, setTalbe] = useState("hotels")
  const [headers, setHeaders] = useState([])
  const [mode, setMode] = useState("insert")
  const [imageUp, setImageUp] = useState("hotels")

  const showDataColumnsReq = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        table: table,
      }),
    }
    ;(async () => {
      const response = await authFetch(
        "http://127.0.0.1:3001/showdatacolumns",
        options
      )
      const headers = await response.json()
      setHeaders(headers)
    })()
  }

  useEffect(showDataColumnsReq, [table])

  let modeComponent
  if (mode === "insert")
    modeComponent = <InsertData table={table} headers={headers} />
  if (mode === "delete")
    modeComponent = <DeleteData table={table} headers={headers} />
  if (mode === "update")
    modeComponent = <UpdateData table={table} headers={headers} />

  return (
    <Div>
      <ButtonGroup>
        <Button name="hotels" onClick={() => setTalbe("hotels")}>
          Hotels
        </Button>
        <Button name="members" onClick={() => setTalbe("members")}>
          Members
        </Button>
        <Button name="positions" onClick={() => setTalbe("positions")}>
          Positions
        </Button>
        <Button name="rooms" onClick={() => setTalbe("rooms")}>
          Rooms
        </Button>
        <Button name="classes" onClick={() => setTalbe("classes")}>
          Classes
        </Button>
        <Button name="clients" onClick={() => setTalbe("clients")}>
          Clients
        </Button>
      </ButtonGroup>

      <ShowData table={table} headers={headers} />
      <ButtonGroup>
        <Button onClick={() => setMode("insert")}>Insert</Button>
        <Button onClick={() => setMode("update")}>Update</Button>
        <Button onClick={() => setMode("delete")}>Delete</Button>
      </ButtonGroup>
      {modeComponent}
      <LoadExcel table={table} mode={mode} />
      <LabelImage>Send image</LabelImage>
      <ButtonGroup>
        <Button onClick={() => setImageUp("hotels")}>Hotels</Button>
        <Button onClick={() => setImageUp("classes")}>Classes</Button>
      </ButtonGroup>
      <SaveImage table={imageUp} />
    </Div>
  )
}
