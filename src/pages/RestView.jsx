import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {

  const {id} = useParams()
  console.log('parameter')
  console.log(id)
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const allRestourent = useSelector((state)=>state.restourentSlice.allRestourent.restaurants)
  const selectRestourent = allRestourent.find(item=>item.id==id)
  console.log(selectRestourent)

  return (
    <>
    <Row>
        <Col md={1}>
        </Col>
        <Col md={3}>
          <img src={selectRestourent.photograph} alt="" 
           width='100%' height='100%' className='rounded'   />  
        
        </Col>
        <Col md={7} className='px-5'>
        <hr />
        <h5 className='text-center'>Restaurant <span className='text-warning'>Details</span> </h5>
        <hr />
        <ListGroup>
      <ListGroup.Item><h5 className='text-center p-2'>{selectRestourent.name}</h5></ListGroup.Item>
      <ListGroup.Item>Neighbourhood:{selectRestourent.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Address:{selectRestourent.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type:{selectRestourent.cuisine_type}</ListGroup.Item>
      <ListGroup.Item className='text-center p-3 mb-2'>
        <button className='btn btn-warning' onClick={handleShow}>operating hours</button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday: <span className='ms-3'>{selectRestourent.operating_hours.Monday}</span></ListGroup.Item>
      <ListGroup.Item>Tuesday:  <span className='ms-3'>{selectRestourent.operating_hours.Tuesday}</span></ListGroup.Item>
      <ListGroup.Item>Wednesday:<span className='ms-3'>{selectRestourent.operating_hours.Wednesday}</span></ListGroup.Item>
      <ListGroup.Item>Thursday:<span className='ms-3'>{selectRestourent.operating_hours.Thursday}</span></ListGroup.Item>
      <ListGroup.Item>Friday:<span className='ms-3'>{selectRestourent.operating_hours.Friday}</span></ListGroup.Item>
      <ListGroup.Item>saturday:<span className='ms-3'>{selectRestourent.operating_hours.Saturday}</span></ListGroup.Item>
      <ListGroup.Item>sunday:<span className='ms-3'>{selectRestourent.operating_hours.Sunday}</span></ListGroup.Item>
    </ListGroup>
        </Modal.Body>
       
      </Modal>

        <button className='btn btn-warning ms-4'  onClick={() => setOpen(!open)}>Click here to see reviews</button>
      </ListGroup.Item>

    </ListGroup>

        </Col>
    </Row>

    <Row>
      <Col md={4}></Col>
      <Col md={7}>
      <Collapse in={open}>
        <div className='text-center'>
          <hr />
          {selectRestourent.reviews.length>0?
          selectRestourent.reviews.map((review)=>(
            <div className='mt-2'>
            <h6>Name and  date : {review.name}--{review.date}</h6>
            <p>Rating: {review.rating}</p>
            <p>Description: {review.comments}</p>
          </div>
            
          )):
          (
            <p>nothing to display</p>
          )}
          
        </div>
      </Collapse>
      </Col>
    </Row>
    </>
  )
}

export default RestView