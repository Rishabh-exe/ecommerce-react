import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        const getproduct = async () => {
            setloading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setproduct(await response.json());
            setloading(false);
        }
        getproduct();
    }, [])

    const Loading = () => {
        return (
            <>
                loading....
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
               
                <div className="col-md-6 p-5">
                    <img src={product.image} alt={product.title} height="450px" width="400px"></img>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.catetory}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating  {product.rating && product.rating.rate} ★</p>
                    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-dark px-4 py-2 m-2'>Add to Cart</button>
                    <NavLink to="/cart" className="btn btn-dark px-4 py-2 m-2">Go to Cart</NavLink>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product