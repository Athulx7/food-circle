import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestourent } from '../redux/restourentSlice'

function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestourent())
  },[])

  const allRestourent = useSelector((state)=>state.restourentSlice.allRestourent.restaurants)
  console.log('1')
  console.log(allRestourent)
  return (
  <>
  <Row className='mt-3'>
    {
      allRestourent?.length>0?
      allRestourent.map((restourent)=>(<Col sm={6} md={4} lg={3}  className='px-5 py-3' >
        <RestCard restaurants = {restourent}/>
        </Col>
        )):(
          <p>nothing to display</p>

        )

    }
    
       

      
    
 
  </Row>
 
  </>
  )
}

export default Home