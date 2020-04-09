import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import Modal from "react-modal"
import SignUpForm from "../SignUpForm/SignUpForm"
Modal.setAppElement("#root")

const ModalWindow = styled(Modal)`
  position: absolute;
  top: 10%;
  left: 35%;
  right: 35%;
  background-image: linear-gradient(#f6e1e8, white);
  border: 3px dashed #754857;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const CloseButton = styled.button`
  position: absolute;
  top: 0%;
  left: 90%;
  margin: 5px;
  font-size: 2vw;
  color: #754857;
  border: 1px #754857;
  background: none;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`
const WordSignUp = styled.div`
  font-size: 2.4vw;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  color: #754857;
  font-weight: bolder;
`
const LoginButton = styled.button`
  color: #754857;
  background: none;
  border: none;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-size: 1.5vw;
`

export default function SignUp(props) {
  return (
    <ModalWindow
      isOpen={props.isSignUpOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => props.setIsSignUpOpen(false)}
    >
      <CloseButton onClick={() => props.setIsSignUpOpen(false)}>✗</CloseButton>
      <WordSignUp> Sign up </WordSignUp>
      <SignUpForm />
      <LoginButton
        onClick={() => {
          props.setIsSignUpOpen(false)
          props.setIsLoginOpen(true)
        }}
      >
        Login
      </LoginButton>
    </ModalWindow>
  )
}
