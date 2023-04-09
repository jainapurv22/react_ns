import React from 'react'

const Footer = () => {
    console.log(window.location.pathname);
  return (
    <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/4.png?time=1680140529")] bg-[#4E2B8F] bg-blend-overlay bg-opacity-80 bg-center bg-no-repeat bg-cover pt-[100px] pb-[50px] text-[#fff]'>
        <div className='flex md:mx-[200px] max-sm:block max-sm:mx-[25px] sm:max-md:mx-[35px]'>
            <div>
                <p className='text-[22px] spacesek text-left font-medium'>Explore</p>
                <div className='pl-[25px] mt-[15px] text-[16px] flex flex-col gap-[18px] font-medium text-left dmsans'>
                <div><a href='/' className={`${window.location.pathname==="/"?'text-[#000]':'text-[#fff]'} hover:text-[#000] duration-400 ease-in`}>Home</a></div>
                <div><a href='/about' className={`${window.location.pathname==="/about"?'text-[#000]':'text-[#fff]'} hover:text-[#000] duration-400 ease-in`}>About Us</a></div>
                <div><a href='/services' className={`${window.location.pathname==="/services"?'text-[#000]':'text-[#fff]'} hover:text-[#000] duration-400 ease-in`}>Services</a></div>
                <div><a href='/why' className={`${window.location.pathname==="/why"?'text-[#000]':'text-[#fff]'} hover:text-[#000] duration-400 ease-in`}>Why Us</a></div>
                <div><a href='/contact' className={`${window.location.pathname==="/contact"?'text-[#000]':'text-[#fff]'} hover:text-[#000] duration-400 ease-in`}>Contact Us</a></div>
            </div>

            
            </div>
            <div className='ml-[200px] sm:max-md:ml-[120px] w-[35%] max-sm:mx-auto max-sm:w-[100%] max-md:flex max-md:flex-col items-center max-md:mt-[25px]'>
              <a href='/' className=''>
                  <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Next_Solutions-removebg-preview-1.png' className='w-[260%] h-[auto]'></img>
              </a>
              <p className='mt-[20px] dmsans max-md:text-left max-md:text-[17px]'>Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</p>
            </div>
            <div className='ml-[30px] text-left max-sm:mt-[30px] max-sm:ml-[0px]'>
              <p className='text-[23px] mb-[20px] spacesek'>Support</p>
              <div className='text-[16px] dmsans'>
                <a href='' className='leading-[32px]'>info@nextsolutions.in</a><br></br>
                <a href='/privacy-policy' className='leading-[32px]'>Privacy Policy</a><br></br>
                <a href='/refund-policy'>Refund Policy</a>
              </div>
            </div>
        </div>
        <div className='border border-dotted border-b-gray-200 mx-[150px] mt-[80px] max-md:mx-[25px]'></div>
        <div className='pl-[15px] mt-[40px] flex mx-[200px] max-md:mx-[0px] max-md:pl-[30px]'>
          <p className='text-[13px] text-[rgba(255,255,255,0.5)] roboto'>© All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer