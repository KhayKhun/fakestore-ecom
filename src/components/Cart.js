import React, { useEffect, useState } from 'react'
import Bin from '../img/bin.png'
import Plus from '../img/plus.png'
import Minus from '../img/minus.png'
import { useDispatch,useSelector } from 'react-redux';
import { toggleSelect,addCount,reduceCount,resetCount } from '../redux/products';

function Cart() {
  const [totalPrice,setTotalPrice] = useState(0);

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const selectedProducts = products.products.filter(p => p.isSelected)

  useEffect(()=>{
    let total = 0;
    selectedProducts.map(p => {
      total += p.productInfo.price * p.count;
    })
    setTotalPrice(total)   
  },[selectedProducts])

  return (
    <div className='bg-gray-50 fixed h-full w-screen sm:w-[50vw] md:w-[25vw] z-[100] p-[15px] border-2 border-blue-500 right-0 flex flex-col'>
      <h3 className='font-bold mb-[10px]'>My Cart</h3>
      <hr/>
        <span className='font-semibold'>Total Items : {selectedProducts.length}</span>
        <span className='font-semibold mb-[20px]'>Total Price : <span className='text-amber-500'>$ {totalPrice.toFixed(2)}</span></span>
      <ul className='flex flex-col gap-[10px] overflow-y-scroll mb-[80px]'>
        {selectedProducts.map(p =>
        <li key={p.productInfo.id}>
          <div className='bg-white p-[10px] border border-blue-300 rounded-md'>
            <img src={p.productInfo.image} width="40px" height="40px" className='mr-[20px]'/>
            <span>{p.productInfo.title.slice(0,15)}...</span>
            <div className='flex justify-between items-center'>
              <img src={Bin} className='h-[15px] hover:scale-[1.2] hover:cursor-pointer'
                onClick={()=>{
                  dispatch(toggleSelect(p.productInfo.id-1))
                  dispatch(resetCount((products.products[p.productInfo.id-1].productId)))
                }}
              />
              <div>
                <span className='text-sm text-amber-500 font-bold m-[10px]'>$ {(products.products[p.productInfo.id-1].count *products.products[p.productInfo.id-1].productInfo.price).toFixed(2)}</span>
                <img 
                  onClick={()=>{
                    if(products.products[p.productInfo.id-1].count > 1){
                      dispatch(reduceCount((products.products[p.productInfo.id-1].productId)))
                    }
                  }}
                src={Minus} width="20px" height="20px" className='hover:cursor-pointer rounded-full hover:bg-blue-50 p-[5px] border border-blue-500'/>
                <span className='mx-[10px]'>{products.products[p.productInfo.id-1].count}</span>
                <img 
                  onClick={()=>{
                    if(products.products[p.productInfo.id-1].count >= 1){
                      dispatch(addCount((products.products[p.productInfo.id-1].productId)))
                    }
                  }}
                src={Plus} width="20px" height="20px" className='hover:cursor-pointer rounded-full hover:bg-blue-700 p-[5px] bg-blue-500'/>
              </div>
            </div>
          </div>
        </li>)}
        <hr/>
        {selectedProducts.length > 0?<button className='bg-blue-500 hover:bg-blue-700 text-white rounded-md py-[10px]'>Buy</button>:<></>}
      </ul>
    </div>
  )
}

export default Cart
