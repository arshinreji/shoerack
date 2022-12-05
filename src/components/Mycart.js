import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Card } from "react-bootstrap";

function Mycart() {
    const count = 1
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
    
   console.log(details);
   const checkout = () => {
    alert(`Checkout - Subtotal:`)
}
const countinc = () => {
    alert(`Count clicked`)
}
 const countdcr =() => {
   
alert('clicked')
 }
    
  return (
    <div>
        <h1 className='text-center p-5'>Shopping Cart</h1>
          {
      details? (
        
    
    
<ListGroup horizontal>

    <ListGroupItem><Image className='img w-50'src={details.img} /><p>{details.Name}</p><Link to={`/dashboard`}>Remove</Link></ListGroupItem>
  <ListGroupItem><h3>Name</h3><hr></hr><h5>{details.Name}</h5></ListGroupItem>
  <ListGroup.Item> <h3>Price:</h3><hr></hr><h5>{details.price}</h5></ListGroup.Item>
  
  <ListGroup.Item><h3>Catagory</h3><hr></hr><p>{details.catagory}</p></ListGroup.Item>
  <ListGroup.Item><Link><hr className='mt-5'></hr><button onClick={countinc} className='btn btn-success mt-2'>+</button></Link>
  <Link><hr></hr><button className='btn btn-danger' onClick={countdcr} >-</button></Link></ListGroup.Item>
  <ListGroup.Item> <h3>Count</h3><hr></hr><button   className='btn btn-light'><h5 value="count">{count}</h5></button></ListGroup.Item>
  <ListGroup.Item><hr className='mt-5'></hr><Link to={'/payment'} className='btn btn-primary' onClick={checkout}>Checkout</Link></ListGroup.Item>

</ListGroup>


      ):`${<Link to={`/dasboard`} className='btn btn-light'>Empty cart strat Shopping</Link>}`
    }

    </div>
  
  )
}

export default Mycart
 
