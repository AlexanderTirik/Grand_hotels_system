import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Greeting from "../Greeting/Greeting.js"
import styled from "styled-components"
import Diagrams from "../Diagrams/Diagrams.js"


export default function MainPage(props) {

  return (
    <React.Fragment>
        <Greeting/>
        <Diagrams/>
    </React.Fragment>
  )
}
