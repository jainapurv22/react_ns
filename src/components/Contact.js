import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';

const Contact = () => {
  function SendMail() {
    var link = "mailto:japurv27@gmail.com" +
    "&subject=" + escape("This is subject") +
    "&body=" + escape("This is body here");
    window.location.href = link;
    }
  return (
    <div className='spacesek'>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/page-title.jpg?time=1680010227")] bg-no-repeat bg-center bg-cover flex justify-center items-center h-[422px]'>
      <p className='text-[#fff] text-[60px] font-semibold'>Contact Us</p>
      </div>
      <div className='sm:flex mt-[60px] md:mx-[110px]  mb-[80px] gap-[15px]'>
        <div className='sm:w-[44%] sm:max-md:w-[56%] sm:pr-[25px] max-sm:pr-[15px] max-md:pl-[10px]'>
          <p className='text-[35px] font-semibold mb-[25px] text-left'>Contact Us</p>
          <p className='text-left text-[20px] leading-[32px]'>At NextSolutions.in, we are dedicated to providing our clients with the best IT services available. Contact us today to 
          learn more about how we can help your business thrive.</p>
          <div className='mt-[50px] sm:pl-[10px]'>
            <div className='flex gap-[15px] max-sm:flex-col max-sm:items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42" fill = "#D9157F" className='mt-[5px]'><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
              <div className='sm:text-left'>
                <p className='font-semibold text-[24px] max-sm:text-[20px]'>Address</p>
                <p className='text-[#7A7A7A] font-normal dmsans max-sm:text-[16px]'>Faridabad, Haryana</p>
              </div>
            </div>
            <div className='flex gap-[15px] mt-[20px] max-sm:flex-col max-sm:items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42" fill = "#D9157F" className='mt-[2px]'><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
              <div className='sm:text-left max-sm:mt-[5px] max-sm:mb-[15px]'>
                <p className='font-semibold text-[24px] max-sm:text-[20px]'>Email</p>
                <p className='text-[#7A7A7A] font-normal dmsans max-sm:text-[16px]'>info@nextsolutions.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-[20px] pb-[40px] bg-[#F8F8F8] px-[40px] text-left max-md:mr-[50px]'>
          <p className='text-[35px] font-semibold mb-[25px] text-left'>Have Any Questions</p>
          <p className='text-[20px] mb-[32px]'>Feel free to contact us through Twitter or Facebook if you prefer!</p>
          <form target='_blank' rel='nofollow' action="mailto: japurv27@gmail.com">
            <div className='sm:flex w-[100%] justify-between gap-[10px]'>
              <div className='sm:w-[50%]'>
                <input type="text" placeholder='Your Name' className='rounded-[5px] p-[15px] w-[100%]'></input>
              </div>
              <div className='sm:w-[50%] max-sm:mt-[10px]'>
                <input type="email" required='required'  placeholder='Enter Email' className='rounded-[5px] p-[15px] w-[100%] focus:border-[1px] focus:border-solid focus:border-[#69727d]'></input>
              </div>
            </div>
            <div className='mt-[10px] w-[100%] flex'>
                <input type="text" required='required' placeholder='Website' className='rounded-[5px] p-[15px] w-[100%]'></input>
            </div>
            <div className='mt-[10px] w-[100%] flex'>
                <textarea type="text" placeholder='Your Comment' className='rounded-[5px] p-[15px] w-[100%]'></textarea>
            </div>
            <button type='submit'  className='px-[40px] mt-[10px] py-[13px] bg-[#D9157F] font-medium text-[#fff] text-[16px] tracking-wide rounded-[5px]'>Send Message</button>
          </form>
          
        </div>
        
      </div>
      <div className='p-[10px] w-[100%]'>
        <div>
          <iframe width="100%" height="300px" loading='lazy' src='https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near'
          title="London Eye, London, United Kingdom" aria-label='London Eye, London, United Kingdom'>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact