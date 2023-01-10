import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
  const product = useSelector((state) => state.counterReducer)
  return (

    <div className='container'>
      <div className='row'>
      <h1>{product.title}</h1>
        <div className='col-md-4'>
          <img src={product.image} alt={product.title} height="200px" width="180px" />
        </div>
        <div className='col-md-4'>
          <h3>{product.title}</h3>
          <p className='lead fw-bold'>
            {product.qty} X ${product.price}=$
            {product.qty * product.price}
          </p>
          <button className='btn btn-outline-darkme-4' >
            <i class="fa-solid fa-minus"></i>
          </button>
          <button className='btn btn-outline-darkme-4' >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart