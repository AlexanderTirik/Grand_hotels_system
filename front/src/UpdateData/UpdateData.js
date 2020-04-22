import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})
export default function UpdateData(props) {
  const [query, setQuery] = useState({})

  const submitClick = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        table: props.table,
        info: query,
        id: query.id,
      }),
    }
    ;(async () => {
      const response = await authFetch("http://127.0.0.1:3001/updatedata", options)
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
        {props.headers.map((hed, i) => {
          return Object.values(hed).map((header) => {
            return (
              <input
                key={`${i}inp`}
                type="text"
                name={header}
                placeholder={header}
                value={query[header]}
                onChange={handleChange}
              />
            )
          })
        })}
        <button onClick={submitClick}>Submit</button>
      </form>
    </React.Fragment>
  )
}
