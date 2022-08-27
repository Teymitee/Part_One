import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => <div className='container-fluid footer'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <h2>Thyme-Out</h2>
            </div>
            <div className='col-lg-6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h5>Company</h5>
                            <div className='text-secondary'>
                                <p>Blog</p>
                                <p>About us</p>
                                <p>Contact us</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <h5>Services</h5>
                            <div className='text-secondary'>
                                <p>FAQs</p>
                                <p>Our Menu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <p className='small text-secondary'> &copy; 2022 Thyme-Out. All rights reserved</p>
            </div>
            <div className='col d-flex justify-content-end'>
               <FontAwesomeIcon icon={faFacebookF}  className='me-4' size='lg'/>
               <FontAwesomeIcon icon={faTwitter}  className='me-4' size='lg'/>
               <FontAwesomeIcon icon={faInstagram} size='lg'/>
            </div>
        </div>
    </div>
</div>
export default Footer