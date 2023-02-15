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
    let input1 = document.getElementById("input1").value.toLowerCase();
    let input2 = document.getElementById("input2").value.toLowerCase();
    let product = document.getElementById("products").getElementsByTagName('li');

    for (let i = 0; i < product.length; i++) {
      let h3 = product[i].getElementsByTagName("h3")[0];
      let txtValue = h3.textContent || h3.innerText;
      if (txtValue.toLowerCase().indexOf(input1 || input2) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
  function clearInput1(){
    let input1 = document.getElementById("input1");
    input1.value = "";
  }
  function clearInput2(){
    let input2 = document.getElementById("input2");
    input2.value = "";
  }

  return (
    <>
    <nav className='border-blue-400 border-b px-5 sticky top-0 bg-blue-100 z-[1000] flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex h-[60px] items-center'>
          <img alt='bruhReact' src={logo} className="h-[30px] sm:h-[40px]"/>
          <span className='font-extrabold sm:text-[20px] text-[13px] text-blue-800'>FONE SHUU</span>
        </div>
        <ul className='flex gap-8 font-semibold'>
          <input id='input1' className='hidden md:flex py-[3px] w-[40vw] pl-[10px] border border-blue-500 rounded-md focus:outline-none text-gray-600'
            placeholder='Search ...'
            onKeyUp={()=>{
              Search()
              clearInput2()
            }}
            />
          
          <li className='hover:cursor-pointer hover:scale-[1.05] text-[12px]'
            onClick={()=>{dispatch(togglePrice())
              }}
          >Price{priceHigh ? <img alt='bruhReact' src={Arrow} width="10px" className="ml-[4px]"/> : <img alt='bruhReact' src={Arrow} width="10px" className="ml-[4px] rotate-[180deg]"/>}</li>
          
          <li className='flex'>
            {selectedProducts.length>0 ? <div className='bg-red-500 w-[25px] h-[25px] rounded-full text-white flex justify-center items-center'>{selectedProducts.length}</div> : <></>}
            <Link to="cart"onClick={()=>{
              dispatch(trueMenu())
              }}>
              <img alt='bruhReact' src={CartPlus} className="h-[16px] sm:h-[20px]"/>Cart
            </Link>
          </li>
          <li>
            <Link to="/"onClick={()=>{
            dispatch(toggleMenu())
          }}>
            <img id="menuBar" alt='bruhReact' src={MenuBar} className='ease-in-out transition-all sm:w-[25px] w-[30px]'/></Link>
            </li>
        </ul>
      </div>
      <input id='input2' className='md:hidden mb-[10px] w-[90vw] py-[3px] pl-[10px] border border-blue-500 rounded-md focus:outline-none text-gray-600'
            placeholder='Search ...'
            onKeyUp={()=>{
              Search()
              clearInput1()
            }}
            />
    </nav>
    <Menu/>
    </>
  )
}
export default Header