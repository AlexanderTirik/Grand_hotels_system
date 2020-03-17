import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import Modal from "react-modal"

export default function Login(props) {
  const ModalWindow = styled(Modal)`
    position: absolute;
    top: 24%;
    left: 35%;
    right: 35%;
    bottom: 20%;
    background-color: #f6e1e8;
    border: 3px dashed #754857;
    border-radius: 5%;
    display:flex;
    justify-content:center;
    /* z-index:10000; */
    /* top:50%; */
    /* height:100px; */
    /* width:100px; */
  `
  const CloseButton = styled.button`
  position: absolute;
  left:90%;
  margin:5px;
  font-size:2vw;
  color: #754857;
  border: 1px #754857;
  background-color: #f5dfe6;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  `
  const Form = styled.form`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const Input = styled.input`
  padding:2px;
    background-color: #754857;
    color: #f5dfe6;
    border: 2px dotted #c2b0b6;
    font-size: 2vw;
    margin: 5px;
  `
  const Button = styled.button`
    border: 2px solid #c2b0b6;
    border-radius: 5%;
    margin: 5px;
    background-color: #754857;
    color: #f5dfe6;
    font-size:2vw;
  `
  const ButtonMenu = styled.div`
    display: flex;
    flex-direction: row;
  `
  return (
    <>
      <ModalWindow
        isOpen={props.isLoginOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => props.setIsLoginOpen(false)}
      >
        <CloseButton onClick = {() => props.setIsLoginOpen(false)}>✗</CloseButton>
        <Form>
          <Input type="email" name="email" placeholder="Your email" />
          <Input type="password" name="password" placeholder="Your password" />
          <ButtonMenu>
            <Button> Submit </Button>
            <Button onClick = {() => props.setIsLoginOpen(false)}> Cancel </Button>
          </ButtonMenu>
        </Form>
      </ModalWindow>
    </>
  )
}
