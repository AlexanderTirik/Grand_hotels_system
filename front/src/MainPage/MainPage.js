import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Greeting from "../Greeting/Greeting.js"
import styled from "styled-components"
import Diagrams from "../Diagrams/Diagrams.js"
import HotelCarousel from "../HotelCarousel/HotelCarousel.js"
import NavBar from "../NavBar/NavBar.js"
import AboutUs from "../AboutUs/AboutUs"
import Login from "../Login/Login"

export default function MainPage(props) {
  const [isLoginOpen, setIsLoginOpen] = useState(true)
  const Div = styled.div`
    background-color: #f6e1e8;
  `

  const DBButton = styled.button`
    position: fixed;
    padding: 10px;
    margin: 5px;
    background-color: rgba(244, 215, 250, 0.5);
    border: 1px solid #f6e1e8;
    border-radius: 10px;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    color: #754857;
    font-size: 1.5em;
    z-index: 999;
    left: 0%;
    top: 0%;
  `

  return (
    <Div>
      <Login isLoginOpen={isLoginOpen} setIsLoginOpen = {setIsLoginOpen}/>
      {/* <Link to={`/dbcontrol`}>
        <DBButton>Edit DataBase</DBButton>
      </Link> */}
      <NavBar setIsLoginOpen = {setIsLoginOpen}/>
      <Greeting />
      <Diagrams />
      <HotelCarousel />
      <AboutUs />
    </Div>
  )
}
