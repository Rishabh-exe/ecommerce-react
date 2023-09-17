import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark">
                <img src="/img/img2.jpg" className="card-img" alt="background"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h4 className="card-title display-2 fw-bolder md-0">NEW SEASONS ARRIVAL</h4>
                        <p className="card-text fs-2 fw-bolder md-0">Check Out All the Trends</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home