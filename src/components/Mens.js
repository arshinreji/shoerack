import React from 'react'
import {useEffect,useState} from 'react'
function Mens() {
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
      
    </div>
  )
}

export default Mens
