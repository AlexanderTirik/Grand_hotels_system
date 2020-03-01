import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Greeting from "../Greeting/Greeting.js"
import styled from "styled-components"
import Diagrams from "../Diagrams/Diagrams.js"
import HotelCarousel from "../HotelCarousel/HotelCarousel.js"
import NavBar from "../NavBar/NavBar.js"
import AboutUs from "../AboutUs/AboutUs"


export default function MainPage(props) {

  const Div = styled.div`
  background-color:#F6E1E8;
  `

  return (
    <Div>
        <NavBar/>
        <Greeting/>
        <Diagrams/>
        <HotelCarousel/>
        <AboutUs/>
    </Div>
  )
}
