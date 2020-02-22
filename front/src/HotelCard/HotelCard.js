import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import '../../node_modules/aos/dist/aos.css'



export default function HotelCard(props) {
  const [active, setActive] = useState({})


  const Div = styled.div`
      background-image: url(${props.img});
      height:400px;
      width:20%;
  `




  return (
    <Div>
      <p>{this.props.hotel}</p>    
    </Div>
  )
}
