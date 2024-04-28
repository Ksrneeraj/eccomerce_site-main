import React from 'react'
import "./TrackOrder.css"
import { Col, Container, Row,Card, ProgressBar} from "react-bootstrap";
import x from "../../images/ipad.jpg"
import {HiOutlineClipboardList} from 'react-icons/hi'
import {FaBoxOpen} from 'react-icons/fa'
import {FaShippingFast} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
function TrackOrder() {
  return (
    <div >

        <section className="gradient-custom" style={{ backgroundColor:"#eee"}}>
        <Container className="confirm py-5">
        <Row className="justify-content-center align-items-center">
          <Col>
          <Card style={{borderRadius:"10px"}}>
          <Card.Header className="px-4 py-4">
        <Row className="align-items-center justify-content-center fw-bold text-muted">
          <p>
            Thanks for your Order,{" "}
            <span style={{color:"#a8729a"}}>Anna</span>!
          </p>
        </Row>
        </Card.Header>
       <Card.Body>
       <Row className="justify-content-between px-3" style={{fontSize:"25px"}}>
        <Col style={{textAlign:"left",color:"#a8729a"}}>
          <p>Receipt</p>
        </Col>
        <Col className='text-muted' style={{textAlign:"right"}}>
          <p>Receipt Voucher: 1KAU9-84UIL</p>
        </Col>
        </Row>
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
          <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
          />
          <Row>
            <Col>
              <Card className="card-stepper">
                  <Card.Body className='p-5'>
                      <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className="fw-bold">
                          <p>INVOICE{" "}<span className='text-muted'
                          >#Y34XDHR</span></p>
                        </div>
                        <div>
                          <p>Expected Arrival 01/12/19</p>
                          <p>USPS 234094567242423422898</p>
                        </div>
                      </div>
                      <ul id="progressbar" className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0">
                      <li className="step0 active text-center" id="step1"></li>
                      <li className="step0 active text-center" id="step2"></li>
                      <li className="step0 active text-center" id="step3"></li>
                      <li className="step0 active text-muted text-end" id="step4"></li>
                      </ul>
                      <div className='d-flex justify-content-between fw-bold'>
                        <div className='d-flex align-items-center'>
                          <div><HiOutlineClipboardList className='icon me-lg-4 mb-lg-0 '></HiOutlineClipboardList></div>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>Processed</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                         <FaBoxOpen className='icon me-lg-4 mb-lg-0'></FaBoxOpen>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>Shipped</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                         <FaShippingFast className='icon me-lg-4 mb-lg-0'></FaShippingFast>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>En route</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                         <AiFillHome className='icon me-lg-4 mb-lg-0'></AiFillHome>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>Delivered</p>
                          </div>
                        </div>
                      </div>
                  </Card.Body>
              </Card>
            </Col>
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
          <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
          />
  
          <Row>
            <Col>
              {/* <Card className="card-stepper" style={{height:"300px"}}>
                  <Card.Body className='p-5'>
                      <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className="fw-bold">
                          <p>INVOICE{" "}<span className='text-muted'
                          >#Y34XDHR</span></p>
                        </div>
                        <div>
                          <p>Expected Arrival 01/12/19</p>
                          <p>USPS 234094567242423422898</p>
                        </div>
                      </div>
                      <ul id="progressbar" className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0">
                      <li className="step0 active text-center" id="step1"></li>
                      <li className="step0 active text-center" id="step2"></li>
                      <li className="step0 active text-center" id="step3"></li>
                      <li className="step0 active text-muted text-end" id="step4"></li>
                      </ul>
                      <div className='d-flex justify-content-between fw-bold'>
                        <div className='d-flex align-items-center'>
                          <div><HiOutlineClipboardList className='icon me-lg-4 mb-lg-0 '></HiOutlineClipboardList></div>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>Processed</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                         <FaBoxOpen className='icon me-lg-4 mb-lg-0'></FaBoxOpen>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>Shipped</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                         <FaShippingFast className='icon me-lg-4 mb-lg-0'></FaShippingFast>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>En route</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                         <AiFillHome className='icon me-lg-4 mb-lg-0'></AiFillHome>
                          <div>
                            <p className='mb-1'>Order</p>
                            <p className='mb-0'>Delivered</p>
                          </div>
                        </div>
                      </div>
                  </Card.Body>
              </Card> */}
            </Col>
          </Row>
        </Card>
        </Card.Body>
        <div className='justify-content-between d-flex pt-2'>
          <p className='fw-bold h2' style={{color:"#a8729a"}}>Order Details</p>
          <p className='text-muted'>
            <span className='fw-bold h2'>Total:</span>$898.00
          </p>
        </div>
        <div className='justify-content-between d-flex pt-2 details'>
          <p className='text-muted '><span
          className='fw-bold'>Invoice Number :</span> 788152</p>
          <p className="text-muted">
            <span className='fw-bold'>Discount : </span>$19.00
          </p>
        </div>
        <div className='justify-content-between d-flex pt-2 details'>
          <p className='text-muted'><span className='fw-bold'>Invoice Date :</span> 22 Dec,2019</p>
          <p className="text-muted">
            <span className='fw-bold'>GST 18% : </span>123
          </p>
        </div>
        <div className='justify-content-between d-flex pt-2 details'>
          <p className='text-muted'><span className='fw-bold'>Recepits Voucher :</span> 18KU-62IIK</p>
          <p className="text-muted">
            <span className='fw-bold'>Delivery Charges : </span>{" "}Free
          </p>
        </div>
       </Card.Body>
        <Card.Footer style={{backgroundColor:"#a8729a", textAlign:"right"}}>
          <p><h4 style={{fontSize:"25px"}} className='fw-bold'>TOTAL PAID:</h4><span className="h1 text-white">$1024</span></p>
        </Card.Footer>
          </Card>
          </Col>
        </Row>
        </Container>
        </section>
    </div>
  )
}
export default TrackOrder