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
    <div className='spacesek'>
      <div className='bg-[url("https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Untitled-design-5.png?time=1680489995")] bg-no-repeat bg-center bg-blend-overlay bg-[#000] bg-opacity-40 bg-cover h-[700px] pt-[150px]'>
        <div className='sm:w-[50%]'>
          <h5 className='text-left text-[#482C8F] md:ml-[70px] max-md:ml-[20px] mb-[15px] font-semibold'>Tech Management</h5>
          <p className='text-[#fff] text-[64px] font-semibold md:ml-[70px] max-md:ml-[20px] max-md:text-[30px] mb-[20px] md:leading-[65px] text-left'>The Best Source for IT Solutions</p>
          <p className='md:pl-[52px] max-md:pl-[20px] text-[16px] text-left leading-[28px] text-[#fff]'>Web designing in a powerful way of just not an only professions, however, in a passion for
          our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors</p>
          <div className='flex justify-start md:ml-[70px] max-md:ml-[20px] mt-[50px]'>
          <button className='px-[40px] py-[18px] bg-[#D9157F] font-medium text-[#fff] text-[14px] dmsans hover:bg-[#482C8F] transition-all hover:mt-[-8px] duration-[300ms] '>DISCOVER MORE</button>
          </div>
        </div>
      </div>
      <div className='sm:flex justify-center md:mx-[190px] max-md:mx-[10px] mt-[-55px] gap-[20px] mb-[30px]'>
        {infos.map((info,i)=>{
          return (
            <div className='sm:w-[33.33%] p-[25px] bg-[#fff] shadow-[0_0_10px_0_rgba(0,0,0,0.5)] max-sm:mb-[15px]'>
              <div className='flex max-sm:flex-col sm:gap-[15px] items-center max-md:justify-center'>
                <img src={info.image} alt='' className='md:w-[68px] md:h-[68px] max-sm:w-[30%] sm:max-md:w-[22%] max-md:h-[auto] '></img>
                <p className='font-semibold text-left md:text-[25px] max-md:text-[20px]'>{info.title}</p>
              </div>
              <div>
                <p className='text-[#7A7A7A] text-[16px] text-left md:tracking-wide font-normal mt-[5px] dmsans'>{info.description}</p>
              </div>
            </div>
          )
        })

        }
      </div>
      <div className='md:px-[45px] max-md:pl-[10px] px-[45px] pr-[30px] my-[70px] sm:flex md:gap-[120px] max-md:gap-[20px] w-[100%]'>
        <div className=''>
          <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Untitled-design-6.png' alt=''></img>
        </div>
        <div className='text-left sm:w-[68%] md:w-[55%]'>
          <h5 className='text-[#482C8F] font-semibold mb-[10px] max-sm:mt-[18px] max-md:text-[17px]'>About Our Company</h5>
          <h2 className='text-[48px] font-semibold md:leading-[53px] max-md:text-[25px] max-sm:mt-[15px]'>We Execute Our ideas From The Start to Finish</h2>
          <p className='py-[25px] text-[16px] text-[#7A7A7A] leading-[27px] tracking-wide dmsans'>NextSolutions.in is a leading provider of 
          IT services, committed to helping businesses harness the power of technology to achieve their goals. With over 10 years of 
          experience in the industry, we have established ourselves as a reliable & trustworthy partner for businesses of all sizes. 
          Our team of experts is passionate about technology and dedicated to providing exceptional service to our clients. We take 
          the time to understand your business and its unique requirements, so we can deliver customized solutions that meet your 
          specific needs.</p>
          <div className='sm:flex max-sm:mx-[12px] gap-[15px]'>
          {abouts.map((about,i)=>{
            return (
              <div>
                <div className='flex max-sm:flex-col sm:gap-[15px] items-center max-md:justify-center'>
                  <img src={about.image} alt='' className='md:w-[68px] md:h-[68px] max-sm:w-[30%] sm:max-md:w-[22%] max-md:h-[auto]'></img>
                  <p className='font-semibold text-left md:text-[24px] max-md:text-[20px]'>{about.title}</p>
                </div>
                <div className=''>
                  <p className='text-[#7A7A7A] text-[15px] text-left md:tracking-wide font-normal mt-[5px] leading-[28px] dmsans'>{about.description}</p>
                </div>
              </div>
            )
          })

          }
          </div>
          <div>
            <button className='px-[40px] py-[18px] mt-[20px] bg-[#D9157F] font-medium text-[#fff] text-[14px] dmsans hover:bg-[#060097] transition-all hover:mt-[10px] duration-[300ms] '>DISCOVER MORE</button>
          </div>
        </div>
      </div>
      <div className='mt-[60px] flex flex-col items-center md:mx-[18%] font-semibold'>
        <h5 className='text-[#482C8F] font-semibold dmsans max-md:text-[16px]'>Services We’re Offering</h5>
        <h2 className='text-[48px] mt-[20px] max-md:text-[25px] max-sm:mx-[20px]'>High quality products and services that we stand behind</h2>
      </div>
      <div className='sm:flex md:mx-[40px] max-md:mx-[5px] mt-[50px] gap-[10px] mb-[50px] justify-center'>
        {services.map((service,i)=>{
          if(i<3)
          return (
            <div className='border border-[#E7E9EE] p-[10px] pb-[50px] w-[370px] max-sm:w-[100%]  max-sm:mb-[10px]'>
              <img src={service.image} className="max-sm:w-[550px] max-sm:mx-auto min-[1024px]:h-[330px] w-[100%] min-[767px]:max-[1024px]:h-[180px]"></img>
              <p className='text-left mt-[20px] font-semibold tracking-wide text-[25px] max-md:text-[20px]'>{service.title}</p>
              <p className='text-left mt-[25px] text-[#7A7A7A] text-[17px] font-normal leading-[30px] roboto'>{service.info}</p>
            </div>
          )
        })
        }
      </div>
      <div className='mt-[60px] flex flex-col items-center font-semibold'>
        <h5 className='text-[#482C8F] font-semibold dmsans max-md:text-[16px]'>From The Blog</h5>
        <h2 className='text-[48px] mt-[10px] max-md:text-[25px] max-sm:mx-[20px]'>News & Articles</h2>
      </div>
      <div className='sm:flex mt-[43px] mb-[40px] md:mx-[200px] max-md:w-[100%] sm:max-md:grid sm:max-md:grid-cols-2 md:gap-[30px] sm:max-md:gap-[10px]'>
        {blogs.map((blog,i)=>{
          return (
            <div className='md:w-[33.33%] max-sm:mx-[10px] max-md:mb-[30px] sm:max-md:mx-[10px] border-0 border-solid border-[#818a91] shadow-[0_0_10px_0_rgba(0,0,0,0.15)] rounded-[3px]'>
              <a href={urls[i]}><img className='w-[100%] rounded-[3px]' src={blog.image} alt=''></img></a>
              <div className='mt-[30px] px-[25px]'>
                <h3 className='font-semibold text-left'><a href={urls[i]} className='text-[25px]'>{blog.title}</a></h3>
                <div className='mt-[25px] text-left'>
                  <a href={urls[i]} className='text-[15px] font-medium text-[#482C8F] dmsans'>READ MORE</a>
                </div>
              </div>
              <div className='dmsans mt-[30px] px-[25px] py-[13px] text-[#7A7A7A] text-[15px] text-left border-solid border-t-[1px] border-[#eaeaea]'>
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