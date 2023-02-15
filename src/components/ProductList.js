import React, { useEffect, useState } from 'react'
import SingleItem from './SingleItem';
import { fetchProductsData } from '../redux/products';

import { useDispatch,useSelector } from 'react-redux';

function ProductList() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProductsData())
    },[])

    const menuActive = useSelector(state => state.menu.isActive)
    const priceToggle = useSelector(state => state.price.isHigh)
    const products = useSelector(state => state.products)
    
    const productByPrice = [...products.products]?.sort((a, b) => {
        if (priceToggle) {
          return b.productInfo.price - a.productInfo.price;
        } else {
          return a.productInfo.price - b.productInfo.price;
        }
      });

    { products.loading ? <h1>loading...</h1> : <></>}

    {!products.loading && products.error ? <h1>Error : {products.error}</h1> : <></>}

    const product = productByPrice?.map(p =>
        <li id='product' key={p.productId.toString()}>
            <SingleItem productInfo={p}/>
        </li>
    )
  return (
    menuActive ? 
    <ul id='products' className='list-none w-screen sm:w-[50vw] md:w-[75vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-[20px]'>
        {product}
    </ul>
    : 
    <ul id='products' className='list-none w-screen grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-[20px]'>
        {product}
    </ul>
  )
}

export default ProductList