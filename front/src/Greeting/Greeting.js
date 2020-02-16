import React, { useEffect } from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import img from "./images/background.jpg"
import styled from "styled-components"
import "../animate.css"

const DivMainBg = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  height: 50vw;
  filter: blur(4px);
`

const Greet = styled.div`
  font-family: "Georgia";
  font-weight: bold;
  font-size: 3em;
  width: 100%;
  color: #754857;
  text-align: center;
  padding: 5px;
  margin: 40px 10px 30px;
`
const SubGreet = styled.div`
  font-family: "Georgia";
  font-size: 2em;
  width: 100%;
  color: #754857;
  text-align: center;
  margin-bottom:10px;
`

const Break = styled.div`
  height: 10px;
  width: 100%;
  background-color: #f6e1e8;
`

const Menu = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 27%;
  top: 30%;
  background-color: rgba(245, 223, 230, 0.5);
  border-radius: 10px;
  border: 4px solid #f6e1e8;
  align-items: center;
  align-content: space-between;
`
const Button = styled.button`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: rgba(194, 176, 182, 0.5);
  border: 0px solid;
  border-radius: 10px;
  font-family: "Georgia";
  color: #754857;
  font-size: 1.5em;
`

export default function Greeting(props) {
  return (
    <React.Fragment>
      <DivMainBg />
      <Menu className="animated fadeIn">
        <Greet>Grand Hotel Systems</Greet>
        <SubGreet>The best hotel chain in the world</SubGreet>
        <Break />
        <Button>Choose hotel</Button>
      </Menu>
    </React.Fragment>
  )
}
