import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AOS from "aos"
import "bootstrap/dist/css/bootstrap.css"
import { Carousel } from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css"
import HotelCard from "../HotelCard/HotelCard"
import bud from "./HotelImages/Budapest.jpg"

export default function HotelCarousel(props) {
  return (
    <div>
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
    </div>
  )
}
