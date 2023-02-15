import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {togglePrice} from '../redux/priceToggle'
import {toggleMenu,trueMenu} from '../redux/menuactive'

import Menu from './Menu'
import logo from '../img/trolley-cart.png'
import Arrow from '../img/caret-down.png'
import CartPlus from '../img/shopping-cart-add.png'
import MenuBar from '../img/bars.png'

function Header() {
  const dispatch = useDispatch()
  const menuActive = useSelector(state=> state.menu.isActive);
  const priceHigh = useSelector(state=> state.price.isHigh);
  const products = useSelector(state=> state.products);
  const selectedProducts = products.products.filter(p => p.isSelected)
  
  function rotateMenu(){
    if(menuActive){
      const menuBar = document.querySelector('#menuBar')
      menuBar.classList.remove('rotate-[180deg]')
      menuBar.classList.add('rotate-[90deg]')
    }else{
      const menuBar = document.querySelector('#menuBar')
      menuBar.classList.remove('rotate-[90deg]')
      menuBar.classList.add('rotate-[180deg]')
    }
  }
  useEffect(()=>{
    rotateMenu()
  },[menuActive])

  function Search() {
    let input = document.getElementById("input").value.toLowerCase();
    let product = document.getElementById("products").getElementsByTagName('li');
    for (let i = 0; i < product.length; i++) {
      let h3 = product[i].getElementsByTagName("h3")[0];
      let txtValue = h3.textContent || h3.innerText;
      if (txtValue.toLowerCase().indexOf(input) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }

  return (
    <>
    <nav className='border-blue-400 border-b px-5 sticky top-0 bg-blue-100 z-[1000]'>
      <div className='flex justify-between items-center'>
        <div className='flex h-[60px] items-center'>
          <img alt='bruhReact' src={logo} className="h-[40px]"/>
          <span className='font-extrabold text-[20px] text-blue-800'>FONE SHUU</span>
        </div>
        <ul className='flex gap-8 font-semibold'>
          <input id='input' className='py-[3px] w-[40vw] pl-[10px] border border-blue-500 rounded-md focus:outline-none text-gray-600'
            placeholder='Search ...'
            onKeyUp={()=>{
              Search()
            }}
            />
          
          <li className='hover:cursor-pointer hover:scale-[1.05]'
            onClick={()=>{dispatch(togglePrice())
              }}
          >Price{priceHigh ? <img alt='bruhReact' src={Arrow} width="10px" className="ml-[4px]"/> : <img alt='bruhReact' src={Arrow} width="10px" className="ml-[4px] rotate-[180deg]"/>}</li>
          
          <li className='flex'>
            {selectedProducts.length>0 ? <div className='bg-red-500 w-[25px] h-[25px] rounded-full text-white flex justify-center items-center'>{selectedProducts.length}</div> : <></>}
            <Link to="cart"onClick={()=>{
              dispatch(trueMenu())
              }}>
              <img alt='bruhReact' src={CartPlus} width="25px"/>Cart
            </Link>
          </li>
          <li>
            <Link to="/"onClick={()=>{
            dispatch(toggleMenu())
          }}>
            <img id="menuBar" alt='bruhReact' src={MenuBar} width="25px" className='ease-in-out transition-all'/></Link>
            </li>
        </ul>
      </div>
    </nav>
    <Menu/>
    </>
  )
}
export default Header