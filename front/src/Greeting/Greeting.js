import React, { useEffect } from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import background from "../images/background.jpg"
import wave from "../images/wave.png"
import styled from "styled-components"
import "animate.css"

import {animateScroll as scroll} from "react-scroll"

const DivMainBg = styled.div`
  background-image: url(${background});
  background-size: 100% 100%;
  height: 50vw;
  filter: blur(3px);
  position: relative;
`
const Wave = styled.div`
  position: absolute;
  width: 100%;
  height: 143px;
  bottom: 0;
  left: 0;
  background-image: url(${wave});
  animation: waving 10s linear infinite;

  @keyframes waving {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 1360px;
    }
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 143px;
    background-image: url(${wave});
    left: 0;
    bottom: 0;
    opacity: 0.4;
    animation: waving-reverse 8s linear infinite;
  }

  @keyframes waving-reverse {
    0% {
      background-position: 1360px;
    }
    100% {
      background-position: 0;
    }
  }

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 143px;
    background-image: url(${wave});
    left: 0;
    bottom: 0;
    opacity: 0.6;
    animation: waving 20s -5s linear infinite;
  }
`

const Greet = styled.div`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-weight: bold;
  font-size: 3vw;
  width: 100%;
  color: #754857;
  text-align: center;
  padding: 5px;
  margin: 40px 10px 30px;
`
const SubGreet = styled.div`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-size: 2vw;
  width: 100%;
  color: #754857;
  text-align: center;
  margin-bottom: 10px;
`

const Break = styled.div`
  height: 2px;
  width: 100%;
  background-color: #f6e1e8;
`

const Menu = styled.div`
  width: 50%;
  height: 25vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 27%;
  top: 12vw;
  background-color: rgba(245, 223, 230, 0.4);
  border-radius: 10px;
  border: 4px solid #f6e1e8;
  align-items: center;
  align-content: space-between;
`
const Button = styled.button`
  padding: 2vw 5vw;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 215, 250, 0.4);
  border: 0px solid;
  border-radius: 1vw;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  color: #754857;
  font-size: 3vw;
`


export default function Greeting(props) {
  return (
    <React.Fragment>
      <DivMainBg>
        <Wave />
      </DivMainBg>
      
      <Menu className="animated fadeIn">
        <Greet>Grand Hotel Systems</Greet>
        <SubGreet>The best hotel chain in the world</SubGreet>
        <Break />
        <Button onClick={() => {scroll.scrollTo(1060)}}>Choose hotel</Button>
      </Menu>
    </React.Fragment>
  )
}
