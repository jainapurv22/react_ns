import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from './Navbar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [menu,setMenu] = useState(false);
  return (
    <div>
        <div className='flex max-sm:block sm:max-md:pt-[30px]'>
            <div className='pl-[35px] pr-[20px] w-[18%] max-sm:w-[100%] max-sm:pt-[30px] h-[]'>
                <a href=''>
                    <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Next_Solutions-removebg-preview-1.png' className='w-[160px] max-sm:w-[70%] max-sm:mx-auto max-md:h-[auto] sm:max-md:pt-[30px] h-[124px]'></img>
                </a>
            </div>
            <div className='w-[100%]'>
                <div className='flex max-sm:block max-sm:mx-auto'>
                    <div className='bg-[#F4F5F8] px-[10px] py-[5px] flex gap-[25px] w-[80%] max-sm:w-[100%] max-sm:justify-center'>
                        <div className='flex items-center gap-[15px]'>
                            <MailOutlineIcon sx={{color:'#D9157F',fontSize:'18px'}} ></MailOutlineIcon>
                            <p className='text-[#9B9FA7] text-[13px]'>info@nextsolutions.com</p>
                        </div>
                        <div className='flex items-center gap-[15px]'>
                            <LocationOnIcon sx={{color:'#D9157F',fontSize:'18px'}} ></LocationOnIcon>
                            <p className='text-[#9B9FA7] text-[13px]'>Faridabad, Haryana</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[20%] max-sm:w-[100%] gap-[20px] py-[15px]'>
                        <a href=''><FacebookRoundedIcon fontSize='small'></FacebookRoundedIcon></a>
                        <a href=''><TwitterIcon fontSize='small'></TwitterIcon></a>
                        <a href=''><YouTubeIcon fontSize='small'></YouTubeIcon></a>
                    </div>
                </div>
                <div className='flex justify-between px-[10px] max-md:mb-[40px] sm:max-md:mt-[10px] items-center font-serif'>
                    <div className='max-md:hidden'><Navbar/></div>
                    <div className='flex max-md:justify-end max-md:w-[100%] items-center'>
                        <div className='mr-[10px] md:hidden'>
                            {!menu&&<IconButton  onClick={()=>setMenu(!menu)}><MenuIcon sx={{color:"#494c4f",width:"30px",height:"30px"}}></MenuIcon></IconButton>}
                            {menu&&<IconButton onClick={()=>setMenu(!menu)}><CloseIcon sx={{color:"#494c4f",width:"30px",height:"30px"}}></CloseIcon></IconButton>}
                        </div>
                        <div className='max-sm:w-[65%] max-md:w-[18%] mr-[20px]'>
                            <button className='dmsans py-[7px] sm:px-[30px] md:px-[70px] w-[100%] bg-[#D9157F] font-medium text-[#fff] text-[15px] rounded-[5px]'>Get Solution</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {menu&&
                <div className='z-20 duration-350 ease-in md:hidden bg-[#000] w-[100%] max-sm:border-t border-black text-[16px] font-medium dmsans text-left text-[#494c4f]'>
                    <div className={`${window.location.pathname==="/"?'bg-[#e8c204] text-[#fff]':'bg-[#f9f9f9]'} hover:bg-[#e8c204] hover:text-[#fff] duration-350 ease-out hover:ease-in`}><a href='/' className='block py-[9px] pl-[20px]'>Home</a></div>
                    <div className={`${window.location.pathname==="/about"?'bg-[#e8c204] text-[#fff]':'bg-[#f9f9f9]'} hover:bg-[#e8c204] hover:text-[#fff] duration-300 ease-out hover:ease-in`}><a href='/about' className='block py-[9px] pl-[20px]'>About Us</a></div>
                    <div className={`${window.location.pathname==="/services"?'bg-[#e8c204] text-[#fff]':'bg-[#f9f9f9]'} hover:bg-[#e8c204] hover:text-[#fff] duration-300 ease-out hover:ease-in`}><a href='/services' className='block py-[9px] pl-[20px]'>Services</a></div>
                    <div className={`${window.location.pathname==="/why"?'bg-[#e8c204] text-[#fff]':'bg-[#f9f9f9]'} hover:bg-[#e8c204] hover:text-[#fff] duration-300 ease-out hover:ease-in`}><a href='/why' className='block py-[9px] pl-[20px]'>Why Us</a></div>
                    <div className={`${window.location.pathname==="/contact"?'bg-[#e8c204] text-[#fff]':'bg-[#f9f9f9]'} hover:bg-[#e8c204] hover:text-[#fff] duration-300 ease-out hover:ease-in`}><a href='/contact' className='block py-[9px] pl-[20px]'>Contact Us</a></div>
                </div>
        }
    </div>
    
  )
}

export default Header