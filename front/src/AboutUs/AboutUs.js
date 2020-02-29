import React from "react"
import styled from "styled-components"

export default function MainPage(props) {
  const Div = styled.div`
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    padding: 10px;
    margin: 5px 10px;
    border: dashed 3px #c2b0b6;
  `
  const Article = styled.article`
    font-weight: bold;
    font-size: 2vw;
    color: #754857;
  `

  const H1 = styled.h1`
    text-decoration: underline dashed #c2b0b6;
    font-weight: bold;
    font-size: 3vw;
    color: #754857;
  `

  return (
    <Div>
      <H1>About us</H1>
      <Article>
        We are a progressive hotel chain, which strives to offer our customers
        the most acceptable amenities, at the lowest possible price. Our grand
        hotels are known all over the world, each hotel has at least 100 rooms.
        Grand hotel systems only build five-star hotels in the most picturesque
        places in the world. We do not have a room where there is no panorama of
        the most beautiful view. Our employees are ready to care for their
        customers more than their children. We are ready to make your stay in
        our hotel unforgettable for you.
      </Article>
    </Div>
  )
}
