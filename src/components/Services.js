import React from 'react'
import benefits from '../utils/benefits'
import services from '../utils/services'

const Services = () => {
  return (
    <div>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/page-title.jpg?time=1680010227")] bg-no-repeat bg-center bg-cover flex justify-center items-center h-[422px]'>
      <p className='text-[#fff] text-[60px] font-semifold'>Services</p>
      </div>
      <div className='my-[60px] px-[180px]'>
        <p className='text-[25px] font-normal'>At NextSolutions.in, we provide a comprehensive range of IT services that cater to the needs of businesses of all sizes. Our experienced team of professionals is well-equipped to handle any challenge and provide customized solutions that meet your unique requirements.</p>
      </div>
      <div className='flex mx-[40px] mt-[120px] gap-[10px] mb-[100px]'>
        {services.map((benefit,i)=>{
          return (
            <div className='border border-[#E7E9EE] p-[10px] pb-[50px] w-[340px]'>
              <img src={benefit.image} className="h-[330px] w-[100%]"></img>
              <p className='text-left mt-[20px] font-semibold tracking-wide text-[25px]'>{benefit.title}</p>
              <p className='text-left mt-[25px] text-[#7A7A7A] text-[17px] font-normal leading-[30px]'>{benefit.info}</p>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default Services