import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <NavLink to={'/'}>Home</NavLink> 
      <NavLink to={'/students'}>Students</NavLink> 
      <NavLink to={'/contact'}>Contact Us</NavLink> 
    </div>
  )
}

export default Nav
