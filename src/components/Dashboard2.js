import React from 'react'
import {useEffect,useState} from 'react'
import Allproducts from './Allproducts'
import Carousels from './Carousels';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Dashboard2() {
    const [Allproduct,setAllproducts]=useState([])
    const fetchData=async ()=>{
      await fetch('/shoes.json')
      .then((res)=>res.json())
      .then((data)=>setAllproducts(data.shoes))
    }
    console.log(Allproduct);
    const details = Allproduct.filter((i) => i.id>8)
    useEffect(() => {
    fetchData()
    }, [])
   
    console.log(details);
    return (
      <div>
        <Carousels/>
     <Row>
      {details.map((details)=>(
         <Col>
         <Allproducts data={details}/>
         </Col>
      ))}
       
     
      </Row>  
      <Row>
        <Col>
        </Col>
        <Col>
        <div className='m-5'>
    <nav >
  <ul class="pagination">
  <Link  className='text-white text-decoration-none' to={`/dashboard`}> <li className="page-item"><a className="page-link" >Previous</a></li></Link>
  <Link  className='text-white text-decoration-none' to={`/dashboard`}>  <li className="page-item"><a className="page-link" >1</a></li></Link>
  <Link className='text-white text-decoration-none' to={`/dashboard1`}> <li className="page-item"><a className="page-link" >2</a></li></Link>
  <Link  className='text-white text-decoration-none' to={`/dashboard1`}> <li className="page-item"><a className="page-link" >Next</a></li></Link>
  </ul>
</nav>
    </div>
        </Col>
        <Col>
        </Col>
        
    </Row>
  
        
  
      </div>
    )
}

export default Dashboard2