import React from 'react'

import CartImage from '../img/shopping-cart.png'
import Clock from '../img/clock.png'
import Wallet from '../img/wallet.png'
import Settings from '../img/settings.png'
import Exclamation from '../img/exclamation.png'
import {Link} from 'react-router-dom'
function MenuItems() {
  return (
    <div className='bg-gray-50 fixed h-full w-screen sm:w-[50vw] md:w-[25vw] z-[100] p-[20px] border-2 border-blue-500 right-0 flex flex-col'>
      <div>
      Profile  
    </div>  
    <hr/>
    <div className='flex flex-col'>
      <Link to='cart' className='hover:bg-gray-100 py-[13px]' ><img className='w-[25px] mr-[10px]' src={CartImage}/>My Cart</Link>
      <div className='hover:bg-gray-100 py-[13px]' ><img className='w-[25px] mr-[10px]' src={Clock}/>History</div>
      <div className='hover:bg-gray-100 py-[13px]' ><img className='w-[25px] mr-[10px]' src={Wallet}/>My Balance</div>
      <div className='hover:bg-gray-100 py-[13px]' ><img className='w-[25px] mr-[10px]' src={Settings}/>Settings</div>
      <div className='hover:bg-gray-100 py-[13px]' ><img className='w-[25px] mr-[10px]' src={Exclamation}/>More About Us</div>
    </div>

    <button className='w-full border text-blue-500 border-blue-500 py-[8px] rounded-lg hover:bg-blue-500 hover:text-white '>Log Out</button>
  
    </div>
  )
}

export default MenuItems
