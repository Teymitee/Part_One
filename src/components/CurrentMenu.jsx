import React from 'react'

const CurrentMenu = (props) => <div className='container-fluid current-menu pt-5'>
    <div className='container mx-auto'>
    <div className='container'>
    <div className='col'>
        <h4 className='text-uppercase text-danger mb-5'>Menu</h4>
    </div>
    <div className='row'>
        <div className='col'>
            <h1>Current Menu</h1>
        </div>
        <div className='col-lg-5 col-sm-12'>
            <div className='d-grid mx-auto'>
            <div className='btn-group border border-grey rounded'>
                <div className='btn active border-0 bg-danger text-light'>All</div>
                <div className='btn'>Rice</div>
                <div className='btn'>Beans</div>
                <div className='btn'>Swallow</div>
                <div className='btn'>Others</div>
            </div>
            </div>
         
        </div>
    </div>
    </div>

    <div className='container'>
        <div className='row mb-5'>
            {props.children}
        </div>
    </div>

    <div className='row'>
        <div className='mx-auto text-center'>
            <button className='btn btn-md btn-danger rounded-pill mb-5'>Full Menu</button>
        </div>
    </div>
    </div>
</div>



export default CurrentMenu