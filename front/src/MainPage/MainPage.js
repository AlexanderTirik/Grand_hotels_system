import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Greeting from "../Greeting/Greeting.js"
import styled from "styled-components"
import Diagrams from "../Diagrams/Diagrams.js"
import HotelCarousel from "../HotelCarousel/HotelCarousel.js"



export default function MainPage(props) {

  const Div = styled.div`
  background-color:#F6E1E8;
  `

  return (
    <Div>
        <Greeting/>
        <Diagrams/>
        <Div>
         <HotelCarousel/>
        </Div>
    </Div>
  )
}
