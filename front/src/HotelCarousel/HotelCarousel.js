import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AOS from "aos"
import "bootstrap/dist/css/bootstrap.css"
import { Carousel } from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css"
import bud from "./HotelImages/Budapest.jpg"

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
  height:35vw;
  width:100%;
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
      console.log(data)
    })()
  }, [])

  return (
    <Div data-aos="zoom-in">
      <Carousel>
        {data.map(hot => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://file.videopolis.com/F/1/9fdaf9bf-b97b-43fe-b491-b63ee0fcb3bd/101036.11808.estes-park.stanley-hotel.hero-LbqKaRfl-44080-1280x720.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>{hot.hotel_name}</h3>
              <p>{hot.stars} Stars</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Div>
  )
}
