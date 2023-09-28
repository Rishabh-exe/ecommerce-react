import React from 'react'
import Products from './Products'
import UncontrolledExample from './UncontrolledExample'
import Footer from './Footer'

function Home() {
    return (
        <div className='hero'>
            <UncontrolledExample/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home