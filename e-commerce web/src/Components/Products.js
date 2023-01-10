import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoding] = useState(false);
    let ComponentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoding(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (ComponentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoding(false)
                console.log(filter)
            }
            return () => {
                ComponentMounted = false;
            }
        }
        console.log(filter)
        getProducts();

    }, [])
    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList)
    }
    const ShowProducts = () => {
        return (
            <div className='buttons justify-content-center mb-5 pd-5' >


                <Button variant="outline-dark me-2" onClick={() => setFilter(data)}> All</Button>
                <Button variant="outline-dark me-2" onClick={() => filterProduct("men's clothing")}> Men's Clothing</Button>
                <Button variant="outline-dark me-2" onClick={() => filterProduct("women's clothing")}> Womens Clothing</Button>
                <Button variant="outline-dark me-2" onClick={() => filterProduct("jewelery")}> Jewelery</Button>
                <Button variant="outline-dark me-2" onClick={() => filterProduct("electronics")}> Electronics</Button>
                {filter.map((product) => {

                    return (
                        <div className="display-flex flex-column col-md-3 mb-4" key={product.id}>
                            <Card>
                                <Card.Img variant="top" height={250} src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title.substring(0, 12)}...</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button variant="outline-dark">
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none'}} variant="outline-dark">Buy Now</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                }


                )}

            </div>
        )
    }

    return (

        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Letest Product</h1>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>

    )
}

export default Products