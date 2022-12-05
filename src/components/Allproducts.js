import React from 'react'
import { Card,Button } from 'react-bootstrap' 
import { Link } from 'react-router-dom'
import Shoedetails from './Shoedetails'
function Allproducts({data}) {
  return (
    <div>
        <Card className='mt-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.Name}</Card.Title>
        <Card.Text>
          Price : {data.price}
        </Card.Text>
     <Link to={`/shoedetails/${data.id}`}>   <Button variant="light">Quick Buy</Button></Link>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Allproducts
