import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Avatar from './Avatar'

const Navbar = () => {
  return (
    <nav className='
    w-screen
    h-15
    px-5
    bg-red-200
    
    flex
     items-center
       justify-between
    '>
       <div className='flex  items-center space-x-2'>
         <Logo/>
         <h1 className='text-xl font-semibold'>NOTO</h1>
       </div>

       <div className='flex space-x-5'>
       <Menu/>
       <Avatar/>
       </div>


    </nav>
  )
}

export default Navbar