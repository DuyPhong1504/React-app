import React from 'react'
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/0811cc08c63fad0ab5b52d9449a4d554.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/2ec32651d4cffd624c986cd801691dd4.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kfcvietnam.com.vn/uploads/banner/706bea33b68caf846dd84d5e2ad5bd54.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


  )
}

export default CarouselComponent
