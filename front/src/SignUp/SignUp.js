import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import Modal from "react-modal"

export default function SignUp(props) {
  const ModalWindow = styled(Modal)`
    position: absolute;
    top: 20%;
    left: 35%;
    right: 35%;
    bottom: 20%;
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
    font-size: 2.5vw;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    color: #754857;
    font-weight: bolder;
  `
  const Form = styled.form`
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const Input = styled.input`
    padding: 2px;
    background: none;
    color: #754857;
    border: 0;
    border-bottom: 2px solid #754857;
    border-left: 2px solid #754857;
    font-size: 1.6vw;
    margin: 5px;
  `
  const Button = styled.button`
    border: 2px solid #c2b0b6;
    border-radius: 5%;
    margin: 5px;
    background-color: #754857;
    color: #f5dfe6;
    font-size: 2vw;
  `
  const LoginButton = styled.button`
    color: #754857;
    background: none;
    border: none;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-size: 1.5vw;
  `
  return (
    <>
      <ModalWindow
        isOpen={props.isSignUpOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => props.setIsSignUpOpen(false)}
      >
        <CloseButton onClick={() => props.setIsSignUpOpen(false)}>
          ✗
        </CloseButton>
        <WordSignUp> Sign up </WordSignUp>
        <Form>
          <Input type="text" name="firstName" placeholder="First name" />
          <Input type="text" name="secondName" placeholder="Second name" />
          <Input type="email" name="email" placeholder="Your email" />
          <Input type="password" name="password" placeholder="Your password" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <Button> Submit </Button>
        </Form>
        <LoginButton
          onClick={() => {
            props.setIsSignUpOpen(false)
            props.setIsLoginOpen(true)
          }}
        >
          Login
        </LoginButton>
      </ModalWindow>
    </>
  )
}
