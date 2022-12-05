import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousels from './Carousels';
import { Row,Col } from 'react-bootstrap';
import {useEffect,useState} from 'react'
import Product from './Product';
function Home() {
  const[products,setProduct]=useState([])
  const fetchData=async ()=>{
    await fetch('/shoes.json')
    .then((res)=>res.json())
    .then((data)=>setProduct(data.shoes))
  }
  useEffect(() => {
  fetchData()
  }, [])
  console.log("our product is",products);
  return (
<div>
<Carousels/>
   <Row>
    {products.map((product)=>(
       <Col>
       <Product data={product}/>
       </Col>
    ))}
   
    </Row>  

      
 
    
</div>



  )
}

export default Home

