import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Greeting from "../Greeting/Greeting.js"
import styled from "styled-components"


export default function MainPage(props) {

  return (
    <React.Fragment>
        <Greeting/>
    </React.Fragment>
  )
}
