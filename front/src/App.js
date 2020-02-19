import React from "react"
import "./App.css"
import { useState } from "react"
import Data from "./Data/Data.js"
import MainPage from "./MainPage/MainPage"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage}/>
        <Route path="/dbcontrol" component={Data}/>
      </div>
    </Router>
  )
}

export default App
