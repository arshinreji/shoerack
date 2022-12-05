import React from 'react'
import { Card,Button } from 'react-bootstrap' 
import { Link } from 'react-router-dom';
function Product({data}) {
    console.log(data);
  return (
    <Link className='text-white text-decoration-none' to={'/login'}>
    <Card className='mt-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.Name}</Card.Title>
        <Card.Text>
          Price : {data.price}
        </Card.Text>
        <Button variant="light">Quick Buy</Button>
      </Card.Body>
    </Card>
    </Link>
 
  )
}

export default Product
