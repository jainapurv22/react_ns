import React from 'react'
import services from '../utils/services'
import talks from '../utils/talks'

const About = () => {
  return (
    <div>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/page-title.jpg?time=1680010227")] bg-no-repeat bg-center bg-cover flex justify-center items-center h-[422px]'>
      <p className='text-[#fff] text-[60px] font-semifold'>About Us</p>
      </div>
      <div className='px-[45px] pr-[30px] mt-[60px] flex gap-[120px] w-[100%]'>
        <div className=''>
          <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Untitled-design-6.png'></img>
        </div>
        <div className='text-left w-[55%]'>
          <h5 className='text-[#482C8F] font-semibold mb-[10px]'>About Our Company</h5>
          <h2 className='text-[48px] font-semibold'>We Execute Our ideas From The Start to Finish</h2>
          <p className='py-[30px] text-[15px] text-[#7A7A7A] leading-[27px] tracking-wide'>NextSolutions.in is a leading provider of IT services, committed to helping businesses harness the power of technology to 
          achieve their goals. With over [number of years] years of experience in the industry, we have established ourselves as a 
          reliable and trustworthy partner for businesses of all sizes.</p>
          <p className='text-[15px] text-[#7A7A7A] leading-[27px] tracking-wide'>Our team of experts is passionate about technology and dedicated to providing exceptional service to our clients. We 
          take the time to understand your business and its unique requirements, so we can deliver customized solutions that meet 
          your specific needs.</p>
        </div>
      </div>
      <div className='mt-[60px] mx-[350px] font-semibold'>
        <h5 className='text-[#482C8F] font-normal'>Services We’re Offering</h5>
        <h2 className='text-[48px] mt-[20px]'>High quality products and services that we stand behind</h2>
      </div>
      <div className='flex mx-[40px] mt-[50px] gap-[10px] mb-[50px] justify-center'>
        {services.map((benefit,i)=>{
          if(i<3)
          return (
            <div className='border border-[#E7E9EE] p-[10px] pb-[50px] w-[370px]'>
              <img src={benefit.image} className="h-[330px] w-[100%]"></img>
              <p className='text-left mt-[20px] font-semibold tracking-wide text-[25px]'>{benefit.title}</p>
              <p className='text-left mt-[25px] text-[#7A7A7A] text-[17px] font-normal leading-[30px]'>{benefit.info}</p>
            </div>
          )
        })
        }
      </div>
      <div className='mt-[10px] mx-[450px] font-semibold'>
        <h5 className='text-[#482C8F] font-normal'>Our Feedbacks</h5>
        <h2 className='text-[48px] mt-[20px] m-[auto]'>What They're Talking About Company</h2>
      </div>
      <div className='my-[40px] mx-[50px] flex gap-[10px]'>
        {talks.map((talk,i)=>{
          return (
            <div>
              <div className='px-[30px] pt-[60px] pb-[20px] text-left rounded-[10px] shadow-[0_3px_15px_0_rgba(0,0,0,.16)]'>
                <p className='text-[18px] mb-[40px] text-[#96989B] leading-[28px]'>{talk.info}</p>  
              </div>
              <div className='text-center mt-[-30px]'>
                <img src={talk.image} className='w-[60px] h-[60px] rounded-[50%] m-[auto]'></img>
                <strong><p className='mt-[15px] text-[20px] text-[#181D23]'>{talk.name}</p></strong>
                <p className='mt-[5px] text-[#96989B] text-[18px]'>{talk.job}</p>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default About