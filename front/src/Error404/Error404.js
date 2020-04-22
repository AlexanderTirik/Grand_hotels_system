import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Div = styled.div`
font-family: Futura, "Trebuchet MS", Arial, sans-serif;
background-color:#F6E1E8;
color:#754857;
text-align:center;
font-size:3vw;
height:50vw;
`

export default function Error404(props) {
  return <Div>Error 404. ¯ \ _ (ツ) _ / ¯</Div>
}
