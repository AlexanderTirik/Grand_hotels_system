import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import styled from "styled-components"

export default function NavBar(props) {
  const [scrolled, setScrolled] = useState(false)

  const Logo = styled.a`
    position: relative;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: #754857;
    font-size: 2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.6s;
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

  let Header = styled.header`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding: 40px 100px;
  `

  let A = styled.a`
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #754857;
    letter-spacing: 2px;
    font-weight: 500;
    transition: 0.6s;
  `

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50
      if (isTop !== true) setScrolled(true)
      else setScrolled(false)
    })
  }, [])

  if (scrolled == true) {
    Header = styled.header`
      z-index: 2;
      background-color: #f5dfe6;
      border-bottom: solid 2px #f796b6;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: 0.6s;
      padding: 5px 100px;
    `
    A = styled.a`
      position: relative;
      margin: 15px 15px 0px;
      text-decoration: none;
      font-family: Futura, "Trebuchet MS", Arial, sans-serif;
      color: #754857;
      letter-spacing: 2px;
      font-weight: 500;
      transition: 0.6s;
    `
  }

  return (
    <div>
      <Header>
        <Logo>GHS</Logo>
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
    </div>
  )
}
