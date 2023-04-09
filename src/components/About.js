import React from 'react'
import services from '../utils/services'
import talks from '../utils/talks'

const About = () => {
  return (
    <div className='spacesek'>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/page-title.jpg?time=1680010227")] bg-no-repeat bg-center bg-cover flex justify-center items-center h-[422px]'>
      <p className='text-[#fff] text-[60px] font-semibold'>About Us</p>
      </div>
      <div className='md:px-[45px] max-md:pl-[10px] pr-[30px] mt-[60px] sm:flex md:gap-[120px] max-md:gap-[20px] w-[100%]'>
        <div className=''>
          <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Untitled-design-6.png'></img>
        </div>
        <div className='text-left sm:w-[68%] md:w-[55%]'>
          <h5 className='text-[#482C8F] font-semibold mb-[10px] max-sm:mt-[18px] max-md:text-[17px]'>About Our Company</h5>
          <h2 className='text-[48px] font-semibold max-md:text-[25px] max-sm:mt-[15px]'>We Execute Our ideas From The Start to Finish</h2>
          <p className='py-[30px] text-[15px] text-[#7A7A7A] leading-[27px] tracking-wide'>NextSolutions.in is a leading provider of IT services, committed to helping businesses harness the power of technology to 
          achieve their goals. With over [number of years] years of experience in the industry, we have established ourselves as a 
          reliable and trustworthy partner for businesses of all sizes.</p>
          <p className='text-[15px] text-[#7A7A7A] leading-[27px] tracking-wide'>Our team of experts is passionate about technology and dedicated to providing exceptional service to our clients. We 
          take the time to understand your business and its unique requirements, so we can deliver customized solutions that meet 
          your specific needs.</p>
        </div>
      </div>
      <div className='mt-[60px] flex flex-col items-center md:mx-[18%] font-semibold'>
        <h5 className='text-[#482C8F] font-semibold dmsans max-md:text-[16px]'>Services We’re Offering</h5>
        <h2 className='text-[48px] mt-[20px] max-md:text-[25px] max-sm:mx-[20px]'>High quality products and services that we stand behind</h2>
      </div>
      <div className='sm:flex md:mx-[40px] max-md:mx-[5px] mt-[50px] gap-[10px] mb-[50px] justify-center'>
        {services.map((benefit,i)=>{
          if(i<3)
          return (
            <div className='border border-[#E7E9EE] p-[10px] pb-[50px] w-[370px] max-sm:w-[100%]  max-sm:mb-[10px]'>
              <img src={benefit.image} className="max-sm:w-[550px] max-sm:mx-auto min-[1024px]:h-[330px] w-[100%] min-[767px]:max-[1024px]:h-[180px]"></img>
              <p className='text-left mt-[20px] font-semibold tracking-wide text-[25px] max-md:text-[20px]'>{benefit.title}</p>
              <p className='text-left mt-[25px] text-[#7A7A7A] text-[17px] font-normal leading-[30px] roboto'>{benefit.info}</p>
            </div>
          )
        })
        }
      </div>
      <div className='mt-[10px] flex flex-col items-center md:mx-[28%] font-semibold'>
        <h5 className='text-[#482C8F] font-semibold dmsans max-md:text-[17px]'>Our Feedbacks</h5>
        <h2 className='text-[48px] mt-[20px] m-[auto] max-md:text-[25px] max-sm:mx-[220px] max-md:mx-[150px]'>What They're Talking About Company</h2>
      </div>
      <div className='my-[40px] mx-[50px] md:flex gap-[10px] max-sm:mt-[60px]'>
        {talks.map((talk,i)=>{
          return (
            <div >
              <div className='px-[30px] pt-[60px] pb-[20px] text-left rounded-[10px] shadow-[0_3px_15px_0_rgba(0,0,0,.16)]'>
                <p className='text-[18px] mb-[40px] text-[#96989B] leading-[28px]'>{talk.info}</p>  
              </div>
              <div className='text-center mt-[-30px] max-md:mb-[20px]'>
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