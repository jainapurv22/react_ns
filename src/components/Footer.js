import React from 'react'

const Footer = () => {
    console.log(window.location.pathname);
  return (
    <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/4.png?time=1680140529")] bg-[#4E2B8F] bg-blend-overlay bg-opacity-60 bg-center bg-no-repeat bg-cover pt-[100px] pb-[50px] text-[#fff]'>
        <div className='flex mx-[200px]'>
            <div>
                <p className='text-[23px]'>Explore</p>
                <div className='pl-[25px] mt-[15px] text-[15px] flex flex-col gap-[18px] font-medium text-left'>
                <div><a href='/' className={`${window.location.pathname==="/"?'text-[#000]':'text-[#fff]'}`}>Home</a></div>
                <div><a href='/about' className={`${window.location.pathname==="/about"?'text-[#000]':'text-[#fff]'}`}>About Us</a></div>
                <div><a href='/services' className={`${window.location.pathname==="/services"?'text-[#000]':'text-[#fff]'}`}>Services</a></div>
                <div><a href='/why' className={`${window.location.pathname==="/why"?'text-[#000]':'text-[#fff]'}`}>Why Us</a></div>
                <div><a href='/contact' className={`${window.location.pathname==="/contact"?'text-[#000]':'text-[#fff]'}`}>Contact Us</a></div>
            </div>

            
            </div>
            <div className='ml-[200px] w-[35%]'>
              <a href=''>
                  <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Next_Solutions-removebg-preview-1.png' className='w-[400px] h-[300px]'></img>
              </a>
              <p className='mt-[20px]'>Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</p>
            </div>
            <div className='ml-[30px] text-left'>
              <p className='text-[23px] mb-[20px]'>Support</p>
              <div className='text-[16px]'>
                <a href='' className='mb-[35px]'>info@nextsolutions.in</a><br></br>
                <a href='' className='mb-[35px]'>Privacy Policy</a><br></br>
                <a href=''>Refund Policy</a>
              </div>
            </div>
        </div>
        <div className='border border-dotted border-b-gray-200 mx-[150px] mt-[80px]'></div>
        <div className='pl-[15px] mt-[40px] flex mx-[200px]'>
          <p className='text-[13px] text-[rgba(255,255,255,0.5)]'>© All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer