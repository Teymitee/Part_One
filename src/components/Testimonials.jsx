import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Testimonials = () => <div className='container-fluid reviews-wrapper'>
    <div className='container reviews'>
        <div className='row'>
            <div className='col-lg-5'>
                <h1>
                    What our customers say about us
                </h1>
                <p className='text-secondary'>
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                </p>
            </div>
            <div className="col-lg-7 shadow-lg bg-light mb-5 ps-5 pe-4 rounded">
                <div className='row'>
                    <div className='col d-flex justify-content-end'>
                        <FontAwesomeIcon icon={faQuoteRight} size='4x' className='text-danger p-2'/>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 mb-5'>
                        <img className="img-fluid rounded-circle" alt="" src='https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/275500635_4512629342175434_560304053443114727_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHNOTduFLPN3fnKDEfqj3xSmvwTUvspzMOa_BNS-ynMw6JiOvPJ9Iuz4jpcihFP5MavCfgqw-Q9gs0-_irwMNmr&_nc_ohc=XdM0vsp94SsAX-wUwDF&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AT9ibb4_bZXR-1LPZ3f8PWCdMmGOuwEIAOIewE9a_2YY-w&oe=630C2F25'></img>
                        <h5 className='text-center pt-2'>Temitope Enikankiselu</h5>
                        <p className='text-center text-uppercase text-secondary'>Plateau, Nigeria</p>
                    </div>
                    <div className='col-lg-7 p-2'>
                        <p className='text-secondary p-2'>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


export default Testimonials