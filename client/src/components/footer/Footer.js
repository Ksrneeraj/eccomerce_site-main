import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {BsTelephone} from'react-icons/bs'

function Footer() {
  return (
    <div>
        <div className='bg-secondary text-dark'>
            <div className='d-flex  border border-dark text-dark justify-content-evenly' style={{backgroundColor:"ButtonShadow"}}>
                <p style={{fontSize:"25px",fontFamily:"monospace"}} className='py-3'>Get connected with us on Social networks:</p>
                <div style={{fontSize:'30px'}}>
                    <BsInstagram style={{margin:'15px'}}/>
                    <BsFacebook style={{margin:'15px'}}/>
                    <BsTwitter style={{margin:'15px'}}/>
                    <BsGoogle style={{margin:'15px'}}/>
                </div>
            </div>
         
           
            <div className="container my-">

                <footer class="text-center text-lg-start border border-white mt-xl-5 pt-4">
                
                <div className="container p-4">
                
                <div className="row">
                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h5 className="text-uppercase mb-4">OUR WORLD</h5>

                    <ul className="list-unstyled mb-4">
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>About us</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Collections</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Environmental philosophy</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Artist collaborations</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h5 className="text-uppercase mb-4">Assistance</h5>

                    <ul className="list-unstyled">
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Contact us</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Size Guide</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Shipping Information</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Returns & Exchanges</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Payment</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h5 className="text-uppercase mb-4">Careers</h5>

                    <ul className="list-unstyled">
                        <li>
                        <a href="#!" className="text-white" style={{textDecoration:"none"}}>Jobs</a>
                        </li>
                    </ul>
                    </div>
                

                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h5 className="text-uppercase mb-4">Contact</h5>
                        <p className='text-white'><ImLocation style={{marginRight:"9px"}} />+91 696-969-696</p>
                        <p className='text-white'><BsTelephone style={{marginRight:"9px"}}/>King's Landing,Europe</p>

                  
                    </div>
                    
                </div>
               
                </div>

                <div className="text-center p-3  border-top border-white">
                © 2020 Copyright:
                <a className="text-white" href="#" style={{textDecoration:"none"}}>Fashion.com</a>
                </div>
                
            </footer>
            
            </div>
        </div>
    </div>
  )
}

export default Footer