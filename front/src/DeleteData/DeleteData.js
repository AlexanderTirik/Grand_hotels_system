import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})

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
        />
        <button onClick={submitClick}>Submit</button>
      </form>
    </React.Fragment>
  )
}
