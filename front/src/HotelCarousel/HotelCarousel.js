import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AOS from "aos"
import "bootstrap/dist/css/bootstrap.css"
import { Carousel } from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css"
import bud from "./HotelImages/Budapest.jpg"

export default function HotelCarousel(props) {
  const [data, setData] = useState();

  const Div = styled.div`
    position: relative;
    height: 50%;
    width: 75%;
    left: 13.5%;
    border-radius: 10px;
    border: 4px solid #f6e1e8;
    margin: 25px 0px;
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
        console.log(data);
      })()
  },[])


  return (
    <Div data-aos="zoom-in">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mars-metcdn-com.global.ssl.fastly.net/content/uploads/sites/112/2017/08/06112230/800x400.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mars-metcdn-com.global.ssl.fastly.net/content/uploads/sites/112/2017/08/06112230/800x400.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mars-metcdn-com.global.ssl.fastly.net/content/uploads/sites/112/2017/08/06112230/800x400.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Div>
  )
}
