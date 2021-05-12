import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Footer.css'



function Footer() {
  return (
    <>
      <Card>
    {/* <Card.Img className='cardIMG' variant="top" src={require('../images/stil-zv5QSKaP8G8-unsplash.jpg').default} /> */}
    <Card.Body className='cardBody'>
      <Card.Text className='text'>
        Join the Journey and access the Days of Freedom
      </Card.Text>
      <Button className='inforBTN' variant="outline-info">Learn More</Button>{' '}
    </Card.Body>
  </Card>
    </>
  )
}

export default Footer
