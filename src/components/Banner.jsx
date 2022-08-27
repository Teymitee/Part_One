import React from 'react'



const Banner = () => <div className='container-fluid p-5 banner'>
    <div className='container'>
    <div className='row'>
        <div className='col-sm-12 p-5 col-lg-6'>
            <h1>Delicious meals at your convenience</h1>
            <p>Order your meals from us and we will have it delivered at your doorstep</p>
            <div className='d-grid col-8'>
                <button className='btn btn-danger rounded-pill'>Get Started</button>
            </div>
        </div>
        <div className='col-sm-12 col-lg-6'>
            <div>
                <img className="img-fluid rounded-circle img-thumbnail p-4 border-danger" src='https://kwickmeals.com/wp-content/uploads/2021/12/jollof-and-chicken-400x400-1.jpg' alt='pic of food'></img>
            </div>
        </div>
    </div>
    <div className='row'>

        <span ></span>

    </div>
</div>
</div>


export default Banner