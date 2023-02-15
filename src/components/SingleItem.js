import React, { useState } from 'react'
import Exclamation from '../img/exclamation.png'
import Hot from '../img/hot.png'
import Star from '../img/star.png'
import Discount from '../img/10-percent.png'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { toggleSelect } from '../redux/products';
import { trueMenu } from '../redux/menuactive';

function SingleItem(prop) {

  const product = prop.productInfo

  const dispatch = useDispatch()
  const activeCart = ()=>{
    dispatch(toggleSelect(product.productInfo.id-1))
    dispatch(trueMenu())
  }
  return (
    <div id={`${product.productInfo.category.replace(/\s/g, '').replace(/'/g, "")} ha`}
      className="bg-white h-full border border-blue-400 hover:border-blue-300 rounded-lg px-[15px] py-[10px] relative hover:scale-[1.02] hover:shadow-lg flex flex-col justify-between"
    >
      <img alt="bruh" src={product.productInfo.image} className="h-[100px] mx-auto mb-[15px]"/>
      <div>
        
        <h3 className='text-gray-700 font-bold text-lg leading-5'>
            {product.productInfo.title}</h3>
          <span className='my-[7px] text-amber-400 text-xl font-bold flex justify-between'>$ {product.productInfo.price}
            <span className='text-gray-500 font-semibold text-[12px]'>
              <img alt="bruh" src={Star} width="10px"/> {product.productInfo.rating.rate} ({product.productInfo.rating.count})
            </span>
          </span>
          <hr className='my-[10px]'/>
          <div className='flex justify-center px-[10px] mb-[10px]'>
            {product.isSelected ? <Link to="cart" id={`AddedText${product.productInfo.id}`} className='hover:shadow-xl hover:shadow-amber-400 shadow-xl shadow-amber-200 hover:-translate-y-[4px] hover:cursor-pointer bg-red-500 text-white rounded-sm font-semibold text-xl flex justify-center items-center px-[10px] py-[10px]  w-[80%]'
            onClick={activeCart}
            >Added</Link>
            :
            <Link to="cart" className='hover:shadow-xl hover:-translate-y-[4px] hover:cursor-pointer bg-blue-500 text-white rounded-sm font-semibold text-xl flex justify-center items-center px-[10px] py-[10px]  w-[80%]'
            onClick={activeCart}
            >Add to Cart</Link>
            }
          </div>
      </div>
        {/* Position absoluted & fixed things */}
        <img alt="bruh" src={Exclamation} className="absolute w-[20px] right-[5px] top-[5px]"
          onClick={()=>{
            const infobox = document.getElementById(`infobox${product.productInfo.id}`);
            infobox.classList.toggle('hidden');
          }}
        />
        {
          product.productInfo.rating.count >= 350 && product.productInfo.rating.rate >= 3 ? <img alt="bruh" src={Hot}
          className="absolute w-[40px] left-[-15px] top-[-5px]"
          /> : <img alt="bruh" src={Discount} 
          className="absolute w-[40px] left-[-15px] top-[-5px]"/>
        }
        <div id={`infobox${product.productInfo.id}`}className='absolute hidden top-[30px] right-[-20px] bg-gray-800 opacity-[0.8] p-[13px] rounded-md z-[500]'>
          <div className='text-gray-100'><p>In Stock</p><hr/>{product.productInfo.description}</div>
        </div>
    </div>
  )
}

export default SingleItem
