import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import styled, { css } from "styled-components"
import wave from "../images/wave.png"

export default function NavBar(props) {

  const Div = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
  `

const WaveF = styled.div`
z-index:2;
filter:blur(2px);
transform: rotate(180deg);
opacity:0.8;
position: fixed;
width: 100%;
height: 143px;
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
`
const WaveS = styled.div`
    z-index:2;
    filter:blur(2px);
    transform: rotate(180deg);
    opacity:0.5;
    position: fixed;
    width: 100%;
    height: 143px;
    background-image: url(${wave});
    animation: waving-reverse 20s -5s linear infinite;

    @keyframes waving-reverse {
    0% {
      background-position: 1360px;
    }
    100% {
      background-position: 0;
    }
  }
  `
  const Ul = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Li = styled.li`
    position: relative;
    list-style: none;
  `

  const Header = styled.header`
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 100px;
  `

  const A = styled.button`
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #754857;
    letter-spacing: 2px;
    font-weight: 500;
    background-color: #f5dfe6;
    padding: 10px;
    border: dotted 2px #c2b0b6;
  `

  return (
    <Div>
      <Header>
        <Ul>
          <Li>
            <A>Home</A>
          </Li>
          <Li>
            <A>Statistics</A>
          </Li>
          <Li>
            <A>Hotels</A>
          </Li>
          <Li>
            <A>About us</A>
          </Li>
          <Li>
            <A>Login</A>
          </Li>
          <Li>
            <A>Sign up</A>
          </Li>
        </Ul>
      </Header>
      <WaveF/>
      <WaveS/>
    </Div>
  )
}
