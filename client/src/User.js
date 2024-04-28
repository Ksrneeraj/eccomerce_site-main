import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import SideMenu from './components/side_menu/SideMenu'
function User() {
  return (
    <div>
      <Navbar></Navbar>
        <SideMenu></SideMenu>
        <div style={{marginLeft:"240px"}}>
         <Outlet></Outlet>
        </div>
        
        
    </div>
  )
}

export default User