import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* leftside */}
            <div className="flexColStart f-left">
                <img src="./logo3.png" alt="" width={160} />
                <span className="secondaryText">
                Our vision is to make all people
                <br />
                the best place to live for them.
                </span>
            </div>

            {/* right-side  */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>45 New York, FL 5467, USA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
