import React from 'react'
import {useEffect,useState} from 'react'
import Home from './Home';
import Modal from 'react-bootstrap/Modal'
import { Button, CloseButton, ModalTitle } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
function Login() {
  const[users,setUsers]=useState([])
  const fetchData=async ()=>{
    await fetch('/users.json')
    .then((res)=>res.json())
    .then((data)=>setUsers(data.users))
  }
  useEffect(() => {
  fetchData()
  }, [])
  console.log("our user is",users);

  return (
  <>
   

   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <CloseButton className='m-2'/>
        <ModalTitle className='text-center mt-4 text-bold'><h1>Login</h1></ModalTitle>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3 me-5 ms-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"> 
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 me-5 ms-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    <Link to='/dashboard'> <Button className='ms-5 mt-3 mb-3' variant="success" type="submit">
        Login
      </Button></Link> <br/>
      <Form.Text className='ms-5 mt-3'>New user? please </Form.Text><a>Register</a>
    </Form>
        </Modal.Body>

      </Modal.Dialog>
    </div>
    
  </>
    
  )
}

export default Login

