import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {useDispatch,useSelector } from 'react-redux';
import {addCart} from "../Store/Actions/counterAction"

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoding] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    let ComponentMounted = true;
    const number = useSelector((state)=>state.counterReducer)
console.log(number.length)
    const addProduct=()=>{
        dispatch(addCart(product));
        console.log("sada")
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoding(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (ComponentMounted) {
                setProduct(await response.json())
                setLoding(false)
            }
            return () => {
                ComponentMounted = false;
            }
        }
        getProduct();

    }, [])
    const Laoding = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />

                </div>
            </>
        )
    }
    const ShoProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />
                </div>

                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'> Rating {product.rating && product.rating.rate}
                        <i class="fa-solid fa-star"></i></p>

                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className='lead'> {product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>
                    <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                        Go to cart
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Laoding /> : <ShoProduct />}
                </div>
            </div>
        </>
    )
}
export default Product