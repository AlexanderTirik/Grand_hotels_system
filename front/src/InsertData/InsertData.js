import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"

export default function InsertData(props) {
  const [query, setQuery] = useState({});

  const submitClick = () => {
    const options = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify({
        table: props.table,
        info: query
      })
    }
    ;(async () => {
      const response = await fetch("http://127.0.0.1:3001/insertdata", options)
      
    })()
  }

  const handleChange = (event) => {
    const q = query;
    q[event.currentTarget.name] = event.target.value
    setQuery(q)
  }

  return (
    <React.Fragment>
      <form>
        {props.headers.map((hed, i) => {
          return Object.values(hed).map(header => {
            if (header != "id")
              return <input key={`${i}inp`} type="text" name={header} placeholder={header} value = {query[header]} onChange = {handleChange}/>
          })
        })}
        <button onClick = {submitClick}>Submit</button>
      
      </form>
    </React.Fragment>
  )
}
