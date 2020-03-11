import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AOS from "aos"
import "bootstrap/dist/css/bootstrap.css"
import { Carousel } from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css"

export default function HotelCarousel(props) {
  const [data, setData] = useState([])

  const Div = styled.div`
    position: relative;
    height: 50%;
    width: 75%;
    left: 13.5%;
    border-radius: 10px;
    border: 4px solid #f6e1e8;
    margin: 25px 0px;
  `
  const Img = styled.img`
    height: 35vw;
    width: 100%;
  `

  useEffect(() => {
    const options = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify({
        table: "hotels"
      })
    }
    ;(async () => {
      const response = await fetch("http://127.0.0.1:3001/showdata", options)
      const data = await response.json()
      setData(data)
    })()
  }, [])

  let carousel = []
  
  for (const hot of data) {
    const hotelName = hot.hotel_name;
    const source = `http://127.0.0.1:3001/getimage/hotels/${hotelName.replace(" ", "%20")}`
    carousel.push(
      <Carousel.Item>
        <Img className="d block w-100" src={source} />
        <Carousel.Caption>
          <h3>{hot.hotel_name}</h3>
          <p>{hot.stars} Stars</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }
  return (
    <Div data-aos="zoom-in">
      <Carousel>{carousel}</Carousel>
    </Div>
  )
}
