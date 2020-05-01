import React from "react"
import { useState } from "react"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})

const Input = {
  padding: "2px",
  background: "none",
  color: "#754857",
  border: "0",
  borderBottom: "2px solid #754857",
  borderLeft: "2px solid #754857",
  fontSize: "1.3vw",
  margin: "5px",
}
const Button = {
  border: "2px solid #c2b0b6",
  borderRadius: "5%",
  margin: "5px",
  backgroundColor: "#754857",
  color: "#f5dfe6",
  fontSize: "1.5vw",
}

export default function DeleteData(props) {
  const [query, setQuery] = useState({})

  const submitClick = () => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        table: props.table,
        info: query,
      }),
    }
    ;(async () => {
      const response = await authFetch(
        "http://127.0.0.1:3001/deletedata",
        options
      )
    })()
  }

  const handleChange = (event) => {
    const q = Object.assign({}, query)
    q[event.currentTarget.name] = event.target.value
    setQuery(q)
  }

  return (
    <React.Fragment>
      <form>
        <input
          key="id"
          type="text"
          name="id"
          placeholder="id"
          value={query.id}
          onChange={handleChange}
          style={Input}
        />
        <button onClick={submitClick} style={Button}>
          Submit
        </button>
      </form>
    </React.Fragment>
  )
}
