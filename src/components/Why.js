import React from 'react'
import benefits from '../utils/benefits'

const Why = () => {
  return (
    <div className='spacesek'>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/page-title.jpg?time=1680010227")] bg-no-repeat bg-center bg-cover flex justify-center items-center h-[422px]'>
      <p className='text-[#fff] text-[60px] font-semibold'>Why Us</p>
      </div>
      <div className='my-[60px]'>
        <p className='text-[25px] max-sm:mx-[10px] dmsans'>Choosing NextSolutions.in for your IT needs offers the following benefits:</p>
      </div>
      <div className='sm:flex sm:mx-[20px] max-sm:mx-[5px] justify-center mt-[120px] gap-[10px] mb-[100px]'>
        {benefits.map((benefit,i)=>{
          return (
            <div className='border border-[#E7E9EE] p-[10px] pb-[50px] w-[350px] max-sm:w-[100%]  max-sm:mb-[10px]'>
              <img src={benefit.image} className="max-sm:w-[550px] max-sm:mx-auto min-[1024px]:h-[330px] w-[100%] min-[767px]:max-[1024px]:h-[169px]"></img>
              <p className='text-left mt-[20px] font-semibold tracking-wide text-[25px] max-md:text-[20px]'>{benefit.title}</p>
              <p className='text-left mt-[25px] text-[#7A7A7A] text-[17px] font-normal leading-[30px] roboto'>{benefit.info}</p>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default Why