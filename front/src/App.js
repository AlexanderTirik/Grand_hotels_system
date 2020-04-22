import React, { useState, useEffect } from "react"
import "./App.css"
import Data from "./Data/Data.js"
import MainPage from "./MainPage/MainPage"
import Error404 from "./Error404/Error404"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})

function App() {
  const [logged] = useAuth()
  const [isAdmin, setIsAdmin] = useState(null)

  useEffect(() => {
    const options = {
      method: "POST",
    }
    ;(async () => {
      const response = await authFetch("http://127.0.0.1:3001/isAdmin", options)
      if (response.status === 200) setIsAdmin("true")
      if (response.status !== 200) setIsAdmin(null)
    })()
  }, [logged])

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage} />
        {isAdmin && logged && <Route path="/dbcontrol" component={Data} />}
        {!isAdmin && <Route path="/dbcontrol" component={Error404} />}
      </div>
    </Router>
  )
}

export default App
