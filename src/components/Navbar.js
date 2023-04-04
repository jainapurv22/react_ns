import React from 'react'

const Navbar = () => {
  return (
    <div className='py-[20px] flex gap-[35px] pl-[25px] text-[15px] font-medium tracking-wider dmsans'>
        <a href='/' className=''>Home</a>
        <a href='/about'>About Us</a>
        <a href='/services'>Services</a>
        <a href='/why'>Why Us</a>
        <a href='/contact'>Contact Us</a>
    </div>
  )
}

export default Navbar