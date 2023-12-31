import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;
    
    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setdata(await response.clone().json());
                setfilter(await response.json());
                setloading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    },[]);
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedlist = data.filter((x)=>x.category === cat);
        setfilter(updatedlist);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-conten-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setfilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing </button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic </button>
                </div>
                {
                    filter.map((product) => {

                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                            <div className="card-body">
                                                <h5 className="card-title md-0">
                                                    {product.title.substring(0,12)}
                                                </h5>
                                                <p className="card-text lead fw-bold">${product.price}</p>
                                                <NavLink  to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink >
                                            </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bolder text-center"> Latest Products</h2>
                        <hr />
                    </div>
                </div>
                <div className="row content-center">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>

        </div>
    )
}

export default Products