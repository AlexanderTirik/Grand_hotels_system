import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"

export default function InsertData(props) {
  const [query, setQuery] = useState({})

  const submitClick = () => {
    const insertOptions = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify({
        table: props.table,
        info: query
      })
    }

    let shouldCheck = false
    let checkData1 = false
    let checkData2 = false
    if (props.table === "members") {
      shouldCheck = true
      checkData1 = {
        table: "hotels",
        key: "id",
        id: query.hotel_id
      }
      checkData2 = {
        table: "positions",
        key: "id",
        id: query.position_id
      }
    }
    if (props.table === "rooms") {
      shouldCheck = true
      checkData1 = {
        table: "hotels",
        key: "id",
        id: query.hotel_id
      }
      checkData2 = {
        table: "classess",
        key: "id",
        id: query.class_id
      }
    }
    if (props.table === "visits") {
      shouldCheck = true
      checkData1 = {
        table: "rooms",
        key: "id",
        id: query.room_id
      }
      checkData2 = {
        table: "visitors",
        key: "id",
        id: query.visitor_id
      }
    }
    const checkOptions1 = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify(checkData1)
    }
    const checkOptions2 = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify(checkData2)
    }
    ;(async () => {
      if (shouldCheck) {
        const responseToCheck1 = await fetch(
          "http://127.0.0.1:3001/checkdata",
          checkOptions1
        )
        const request1 = await responseToCheck1.json()
          
        if (request1.status == true) {
          const responseToCheck2 = await fetch(
            "http://127.0.0.1:3001/checkdata",
            checkOptions2
          )
          const request2 = await responseToCheck2.json()
          if (request2.status == true) {
            const response = await fetch(
              "http://127.0.0.1:3001/insertdata",
              insertOptions
            )
          }
        }
      } else {
        const response = await fetch(
          "http://127.0.0.1:3001/insertdata",
          insertOptions
        )
      }
    })()
  }

  const handleChange = event => {
    const q = Object.assign({}, query)
    q[event.currentTarget.name] = event.target.value
    setQuery(q)
  }

  return (
    <React.Fragment>
      <form>
        {props.headers.map((hed, i) => {
          return Object.values(hed).map(header => {
            if (header != "id")
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
