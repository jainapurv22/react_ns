import React from 'react'
import infos from '../utils/infos'
import abouts from '../utils/abouts'
import services from '../utils/services'
import blogs from '../utils/blogs'

const Home = () => {
  const urls = [
    '10-ways-to-achieve-your-business-goal',
    'necessity-may-give-us-best-virtual-court',
    'top-crypto-exchange-influencers-in-china'
  ]

  return (
    <div>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Untitled-design-5.png?time=1680489995")] bg-no-repeat bg-center bg-blend-overlay bg-[#000] bg-opacity-40 bg-cover h-[700px] pt-[150px]'>
        <h5 className='text-left text-[#482C8F] ml-[70px] mb-[15px] font-semibold'>Tech Management</h5>
        <p className='text-[#fff] text-[64px] font-semibold ml-[70px] mb-[20px] leading-[65px] text-left'>The Best Source for<br></br> IT Solutions</p>
        <p className='pl-[52px] text-[16px] text-left leading-[28px] text-[#fff]'>Web designing in a powerful way of just not an only professions, however, in a passion for<br></br>
        our Company. We have to a tendency to believe the idea that smart looking of any website<br></br> is the first impression on visitors</p>
        <div className='flex justify-start ml-[70px] mt-[50px]'>
        <button className='px-[40px] py-[18px] bg-[#D9157F] font-medium text-[#fff] text-[14px] hover:bg-[#060097] transition-all hover:mt-[-8px] duration-[300ms] '>DISCOVER MORE</button>
        </div>
      </div>
      <div className='flex justify-center mx-[190px] mt-[-55px] gap-[20px] mb-[30px]'>
        {infos.map((info,i)=>{
          return (
            <div className='w-[33.33%] p-[25px] bg-[#fff] shadow-[0_0_10px_0_rgba(0,0,0,0.5)]'>
              <div className='flex gap-[15px] items-center'>
                <img src={info.image} alt='' className='w-[68px] h-[68px]'></img>
                <p className='font-semibold text-left text-[25px]'>{info.title}</p>
              </div>
              <div>
                <p className='text-[#7A7A7A] text-[16px] text-left tracking-wide font-normal mt-[5px]'>{info.description}</p>
              </div>
            </div>
          )
        })

        }
      </div>
      <div className='px-[45px] pr-[30px] my-[70px] flex gap-[115px] w-[100%]'>
        <div className=''>
          <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Untitled-design-6.png' alt=''></img>
        </div>
        <div className='text-left w-[55%]'>
          <h5 className='text-[#482C8F] font-semibold mb-[10px]'>About Our Company</h5>
          <h2 className='text-[48px] font-semibold leading-[53px]'>We Execute Our ideas From The Start to Finish</h2>
          <p className='py-[25px] text-[16px] text-[#7A7A7A] leading-[27px] tracking-wide'>NextSolutions.in is a leading provider of 
          IT services, committed to helping businesses harness the power of technology to achieve their goals. With over 10 years of 
          experience in the industry, we have established ourselves as a reliable & trustworthy partner for businesses of all sizes. 
          Our team of experts is passionate about technology and dedicated to providing exceptional service to our clients. We take 
          the time to understand your business and its unique requirements, so we can deliver customized solutions that meet your 
          specific needs.</p>
          <div className='flex gap-[15px]'>
          {abouts.map((about,i)=>{
            return (
              <div>
                <div className='flex gap-[15px] items-center'>
                  <img src={about.image} alt='' className='w-[68px] h-[68px]'></img>
                  <p className='font-semibold text-left text-[25px]'>{about.title}</p>
                </div>
                <div className=''>
                  <p className='text-[#7A7A7A] text-[15px] text-left tracking-wide font-normal mt-[5px] leading-[28px]'>{about.description}</p>
                </div>
              </div>
            )
          })

          }
          </div>
          <div>
            <button className='px-[40px] py-[18px] mt-[20px] bg-[#D9157F] font-medium text-[#fff] text-[14px] hover:bg-[#060097] transition-all hover:mt-[10px] duration-[300ms] '>DISCOVER MORE</button>
          </div>
        </div>
      </div>
      <div className='mt-[60px] mx-[350px] font-semibold'>
        <h5 className='text-[#482C8F] font-semibold'>Services We’re Offering</h5>
        <h2 className='text-[48px] mt-[20px]'>High quality products and services that we stand behind</h2>
      </div>
      <div className='flex mx-[40px] mt-[50px] gap-[10px] mb-[50px] justify-center'>
        {services.map((service,i)=>{
          if(i<3)
          return (
            <div className='border border-[#E7E9EE] p-[10px] pb-[50px] w-[370px]'>
              <img src={service.image} className="h-[330px] w-[100%]" alt=''></img>
              <p className='text-left mt-[20px] font-semibold tracking-wide text-[25px]'>{service.title}</p>
              <p className='text-left mt-[25px] text-[#7A7A7A] text-[17px] font-normal leading-[30px]'>{service.info}</p>
            </div>
          )
        })
        }
      </div>
      <div className='mt-[60px] mx-[350px] font-semibold'>
        <h5 className='text-[#482C8F] font-semibold'>From The Blog</h5>
        <h2 className='text-[48px] mt-[0px]'>News & Articles</h2>
      </div>
      <div className='flex mt-[43px] mb-[40px] mx-[200px] gap-[30px]'>
        {blogs.map((blog,i)=>{
          return (
            <div className='w-[33.33%] border-0 border-solid border-[#818a91] shadow-[0_0_10px_0_rgba(0,0,0,0.15)] rounded-[3px]'>
              <a href={urls[i]}><img className='w-[100%] rounded-[3px]' src={blog.image} alt=''></img></a>
              <div className='mt-[30px] px-[25px]'>
                <h3 className='font-semibold text-left'><a href={urls[i]} className='text-[25px]'>{blog.title}</a></h3>
                <div className='mt-[25px] text-left'>
                  <a href={urls[i]} className='text-[15px] font-medium text-[#482C8F]'>READ MORE</a>
                </div>
              </div>
              <div className='mt-[30px] px-[25px] py-[13px] text-[#7A7A7A] text-[15px] text-left border-solid border-t-[1px] border-[#eaeaea]'>
                <span>{blog.date}</span>
                <span className='mx-[8px]'>•</span>
                <span>{blog.comments}</span>
              </div>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default Home