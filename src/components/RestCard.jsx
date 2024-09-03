import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
  return (
   <>
   <Link  to={`/resturant_view/${restaurants?.id}`} style={{textDecoration:'none'}}>
   <Card style={{ width: '18rem' }} className='p-2' height={'360px'}>
      <Card.Img variant="top" src={restaurants.photograph} height={'250px'}/>
      <Card.Body>
        <Card.Title className='text-center text-warning'>{restaurants.name.slice(0,15)}</Card.Title>
        <Card.Text>
           Neighbor Hood:<span className='text-warning ms-2'>{restaurants.neighborhood}</span>
        </Card.Text>
      </Card.Body>
    </Card>
   
   </Link>

   

   </>
  )
}

export default RestCard