import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";

function Picks() {
  return (
    <div style={{marginLeft:"150px",marginRight:"150px"}}>
        <h2 className='display-5  text-center'>Top picks for you</h2>
        <hr/>
        <div className='row row-cols-1 row-cols-sm-2 row cols-md-3 row-cols-lg-4 justify-content-evenly'>
                <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text">Optimus Prime</p>
                    <p className=''>Autobots</p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
            {/* 2nd card */}
                <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                     <p className="card-text">Optimus Prime</p>
                    <p className=''>Autobots</p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
                {/* 3rd card */}
                <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                    <p className="card-text">Optimus Prime</p>
                    <p className=''>Autobots</p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
                {/* 4th cad */}
                <div className="col card " style={{width:"250px"}}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="..."></img>
                <div className="card-body text-center">
                     <p className="card-text">Optimus Prime</p>
                    <p className=''>Autobots</p>
                    <p><BsCurrencyRupee />5000</p>
                </div>
                </div>
        </div>
        <hr/>
        {/* horizontal cards */}
        <div className="card mx-auto" style={{width:"1000px"}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src="https://media.istockphoto.com/id/1186974930/photo/modern-grey-sofa.jpg?s=612x612&w=0&k=20&c=EzinA5NUawgX2eyXYnmFJRgsd5mqLR7eoS5V8jKMiF8="  class="card-img" alt="..."></img>
            </div>
            <div className="col-md-8">
            <div className="card-body text-center mt-5">
                <p className="card-text">Experienced in making your home more modern and comfortable</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>
        <hr/>
        {/* text here */}
        <div className='text-center mx-auto my-5 w-25' >
            <p className='lead'>Their product are Amazing! This is the best place to buy any
                furnitures with super fantastic quality and design. With super
                many benefits you must try it .</p>
        </div>
        <hr/>
        {/* horizontal card 2 */}
        <div className="card mx-auto" style={{width:"1000px"}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src="https://media.istockphoto.com/id/1186974930/photo/modern-grey-sofa.jpg?s=612x612&w=0&k=20&c=EzinA5NUawgX2eyXYnmFJRgsd5mqLR7eoS5V8jKMiF8="  class="card-img" alt="..."></img>
            </div>
            <div className="col-md-8">
            <div className="card-body text-center mt-5">
                <div className='text-center w-50 mx-auto display-6'><p className="card-text">This friday 25% off & special gift </p>
                <button className='btn btn-warning text-white'>Shop Now</button>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Picks;