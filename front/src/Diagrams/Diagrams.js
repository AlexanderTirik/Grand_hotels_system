import React, { useEffect } from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import styled from "styled-components"
import { Pie } from "react-chartjs-2"
import AOS from "aos"
import "../../node_modules/aos/dist/aos.css"

const roomsData = {
  datasets: [
    {
      data: [148, 95, 57],
      backgroundColor: ["#F796B6", "#DFABFF", "#C0BCf6"],
      borderColor: "#F5DFE6"
    }
  ],
  labels: ["Luxyry", "Standart", "Economy"]
}
const feedBackData = {
  datasets: [
    {
      data: [80, 18, 2],
      backgroundColor: ["#F796B6", "#DFABFF", "#C0BCf6"],
      borderColor: "#F5DFE6"
    }
  ],
  labels: [
    "Will be chosen again in the future",
    "Will be selected again at least 1 time",
    "Will prefer another hotel"
  ]
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #f6e1e8;
  width: 100%;
  height: 450px;
`
const DiagramWrap = styled.div`
  width: 100%;
`

export default function Diagrams(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <Div>
      <DiagramWrap data-aos="fade-right">
        <Pie data={roomsData} options={{}} />
      </DiagramWrap>
      <DiagramWrap data-aos="fade-right">
        <Pie data={feedBackData} options={{}} />
      </DiagramWrap>
    </Div>
  )
}
