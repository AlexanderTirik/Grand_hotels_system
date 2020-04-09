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
import SignUp from "../SignUp/SignUp"
import "animate.css"

const Div = styled.div`
  background-color: #f6e1e8;
`

export default function MainPage(props) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  let NavBarComp
  if (!(isLoginOpen || isSignUpOpen)) {
    NavBarComp = (
      <NavBar
        setIsLoginOpen={setIsLoginOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
    )
  }
  return (
    <Div>
      <Login
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
      <SignUp
        isSignUpOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
      {NavBarComp}
      <Greeting />
      <Diagrams />
      <HotelCarousel />
      <AboutUs />
    </Div>
  )
}
