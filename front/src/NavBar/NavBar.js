import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import styled from "styled-components"
import wave from "../images/wave.png"
import { animateScroll as scroll } from "react-scroll"
import { Link } from "react-router-dom"
import { createAuthProvider } from "react-token-auth"

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "accessToken",
})

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`

const WaveF = styled.div`
  z-index: 2;
  filter: blur(2px);
  transform: rotate(180deg);
  opacity: 0.8;
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
  z-index: 2;
  filter: blur(2px);
  transform: rotate(180deg);
  opacity: 0.5;
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

export default function NavBar(props) {
  const [logged] = useAuth()
  const [isAdmin, setIsAdmin] = useState(null)

  useEffect(() => {
    const options = {
      method: "POST",
    }
    ;(async () => {
      const response = await authFetch("http://127.0.0.1:3001/isAdmin", options)
      if (response.status === 200) setIsAdmin("true")
      if (response.status !== 200) setIsAdmin(null)
    })()
  }, [logged])

  return (
    <Div>
      <Header>
        <Ul>
          <Li>
            <A
              onClick={() => {
                scroll.scrollToTop()
              }}
            >
              Home
            </A>
          </Li>
          <Li>
            <A
              onClick={() => {
                scroll.scrollTo(450)
              }}
            >
              Statistics
            </A>
          </Li>
          <Li>
            <A
              onClick={() => {
                scroll.scrollTo(1060)
              }}
            >
              Hotels
            </A>
          </Li>
          <Li>
            <A
              onClick={() => {
                scroll.scrollTo(1500)
              }}
            >
              About us
            </A>
          </Li>
          {!logged && (
            <>
              <Li>
                <A onClick={() => props.setIsLoginOpen(true)}>Login</A>
              </Li>
              <Li>
                <A onClick={() => props.setIsSignUpOpen(true)}>Sign up</A>
              </Li>
            </>
          )}
          {logged && (
            <>
              <Li>
                <A
                  onClick={() => {
                    logout()
                    document.location.reload(true)
                  }}
                >
                  Logout
                </A>
              </Li>
            </>
          )}
          {isAdmin && (
            <>
              <Li>
                <Link to={`/dbcontrol`}>
                  <A>DB Control</A>
                </Link>
              </Li>
            </>
          )}
        </Ul>
      </Header>
      <WaveF />
      <WaveS />
    </Div>
  )
}
