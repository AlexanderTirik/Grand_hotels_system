import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Table } from "react-bootstrap"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})
function ShowData(props) {
  const [data, setData] = useState([])
  const [table, setTable] = useState("")

  useEffect(() => {
    if (table != props.table) {
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          table: props.table,
        }),
      }
      ;(async () => {
        const response = await authFetch(
          "http://127.0.0.1:3001/showdata",
          options
        )
        const data = await response.json()
        setData(data)
        setTable(props.table)
      })()
    }
  })

  let body = ""
  if (data[0] != null)
    body = data.map((row, index) => (
      <tr key={`bodyrow${index}`}>
        {Object.values(row).map((val, i) => (
          <td key={`bodyel${i}`}>{val}</td>
        ))}
      </tr>
    ))
  return (
    <React.Fragment>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {props.headers.map((hed, i) => {
              return Object.values(hed).map((header) => {
                return <th key={`${i}th`}>{header}</th>
              })
            })}
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </Table>
    </React.Fragment>
  )
}

export default ShowData
