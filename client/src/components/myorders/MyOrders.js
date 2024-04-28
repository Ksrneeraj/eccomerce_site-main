import React from 'react'
import { Col, Container, Row,Card, ProgressBar} from "react-bootstrap";
import x from "../../images/ipad.jpg"
import "./MyOrders.css"
function Order() {
  return (
    <div >

        <section className="gradient-custom h-100" style={{ backgroundColor:"#eee"}}>
        <Container className="confirm py-5">
        <Row className="justify-content-center align-items-center">
          <Col>
          <Card style={{borderRadius:"10px"}}>
          <Card.Header className="px-4 py-4">
        <Row className="align-items-center justify-content-center fw-bold text-muted">
          <p>Order History        
          </p>
        </Row>
        </Card.Header>
       <Card.Body>
        <Card.Body>
        <Card className='py-4 px-4 my-4' style={{fontSize:"20px"}}>
          <Row className='text-Center d-flex justify-content-center align-items-center fw-bold'>
            <Col>
            <Card.Img src={x} className="img-fluid img" />
            </Col>
            <Col><p>iPad</p></Col>
            <Col><p>Pink rose</p></Col>
            <Col><p>Capacity: 32GB</p></Col>
            <Col><p>Qty:1</p></Col>
            <Col><p>$399</p></Col>
          </Row>      
        </Card>
        <Card className='py-4 px-4 my-4' style={{fontSize:"20px"}}>
          <Row className='text-Center d-flex justify-content-center align-items-center fw-bold'>
            <Col>
            <Card.Img src={x} className="img-fluid img" />
            </Col>
            <Col><p>iPad</p></Col>
            <Col><p>Pink rose</p></Col>
            <Col><p>Capacity: 32GB</p></Col>
            <Col><p>Qty:1</p></Col>
            <Col><p>$399</p></Col>
          </Row>
        </Card>
        </Card.Body>
       </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
        </section>
    </div>
  )
}
export default Order