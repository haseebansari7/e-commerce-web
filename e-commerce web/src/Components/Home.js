import React from 'react'
import Card from 'react-bootstrap/Card';
import Products from "../Components/Products";

const Home = () => {
  return (
    <div className='hero'>

    <Card className="bg-dark text-white border-0">
      <Card.Img src="assets/bg.jpg" alt="Card image" height={570} />
      <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
        <div className='container'>

          <Card.Title className='display-3 fw-bolder mb-0'>NEW SEASON ARRIVAL</Card.Title>
          <Card.Text className='lead fs-2'>
            Shop our full women's clothing line right here.<br/> You'll find dresses, jeans and tops in a variety of fits and styles
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </div>

  );
}


export default Home