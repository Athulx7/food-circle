import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchReastouorent } from '../redux/restourentSlice';

function Header() {
const dispatch = useDispatch()



  return (
    <>
       <Navbar variant='dark'>
        <Container>
            <Link to='/' style={{textDecoration:'none'}}>
            <div className='d-flex justify-content-center align-items-center'>

            <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/6643/6643359.png?semt=ais_hybrid"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
           FOOD <span className='text-warning'>CIRCLE</span>
          </Navbar.Brand>

          <input onChange={(e)=>dispatch(searchReastouorent(e.target.value))} type='text' className='form-control' placeholder='Search By Neighbour' />
            </div>
            
            </Link>
      
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header