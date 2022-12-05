import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import { Button } from 'bootstrap';
function Shoedetails() {
    const [data,setData] = useState([])
    const params = useParams()
    const fetchData = async () => {
      await fetch("/shoes.json")
        .then((res) => res.json())
        .then((data) => setData(data.shoes));
        console.log(data);
    }
    useEffect(() => {
      fetchData();
    }, [])
   
    const details = data.find((i) => i.id == params.id)
    
  return (
    <div>
    {
      details? (
        <Row className='my-3'>
<Col md={3}>
<Image className='img'src={details.img} fluid/>
</Col>
<Col md={4}>
<ListGroup>
<ListGroup.Item>
<h2>{details.Name}</h2>

</ListGroup.Item>
<ListGroupItem>
<h4>Price:{details.price}</h4>
<p>Catagory:{details.catagory}</p>
<p>Raiting:{details.raiting}</p>
<Link to={`/mycart/${details.id}`}><button className='btn btn-success'>Add to cart</button></Link>
</ListGroupItem>
</ListGroup>
</Col>
<Col md={4}>
</Col>
<Row>
<Card className='my-3 mx-3 p-3 rounded card'>
</Card>
</Row>
        </Row>
      ):"null"
    }
  </div>
  )
}

export default Shoedetails
