import React from 'react'
import {Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Menu() {
  const active = useSelector(state => state.menu.isActive)
  return(
  active ?
  <div>
    <Outlet/>
  </div> : <></>
  )
}

export default Menu
