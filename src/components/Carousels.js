import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Carousels() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/qR4fv50s/kids.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kids Shoes</h3>
          <p>Avail 10% extra off on kids Shoes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/MG04NmRv/mens.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Womens</h3>
          <p>Avail 15% extra off on Womens Shoes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/MHphyfnX/wommens.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mens</h3>
          <p>
          Avail 20% extra off on Mens Shoes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Carousels
