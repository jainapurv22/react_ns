import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from './Navbar';

const Header = () => {

  return (
    <div className='flex max-[550px]:block'>
        <div className='pl-[35px] pr-[20px] w-[18%] max-[550px]:w-[100%] max-[550px]:pt-[30px]'>
            <a href=''>
                <img src='https://4ni06c.n3cdn1.secureserver.net/wp-content/uploads/2023/03/Next_Solutions-removebg-preview-1.png' className='w-[160px] max-[550px]:w-[300px] max-[550px]:mx-auto max-[550px]:h-[250px] h-[124px]'></img>
            </a>
        </div>
        <div className='w-[100%]'>
            <div className='flex max-[550px]:block max-[550px]:mx-auto'>
                <div className='bg-[#F4F5F8] px-[10px] py-[5px] flex gap-[25px] w-[80%] max-[550px]:w-[100%] max-[550px]:justify-center max-[550px]:mx-[20px]'>
                    <div className='flex items-center gap-[15px]'>
                        <MailOutlineIcon sx={{color:'#D9157F',fontSize:'18px'}} ></MailOutlineIcon>
                        <p className='text-[#9B9FA7] text-[13px]'>info@nextsolutions.com</p>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <LocationOnIcon sx={{color:'#D9157F',fontSize:'18px'}} ></LocationOnIcon>
                        <p className='text-[#9B9FA7] text-[13px]'>Faridabad, Haryana</p>
                    </div>
                </div>
                <div className='flex justify-center items-center w-[20%] max-[550px]:w-[100%] gap-[20px] py-[15px]'>
                    <a href=''><FacebookRoundedIcon fontSize='small'></FacebookRoundedIcon></a>
                    <a href=''><TwitterIcon fontSize='small'></TwitterIcon></a>
                    <a href=''><YouTubeIcon fontSize='small'></YouTubeIcon></a>
                </div>
            </div>
            <div className='flex justify-between px-[10px] items-center font-serif'>
                <div className=''><Navbar/></div>
                <div className='flex max-[550px]:justify-center max-[550px]:w-[100%]'>
                    <div></div>
                    <button className='px-[70px] py-[7px] bg-[#D9157F] font-medium text-[#fff] text-[15px] rounded-[5px]'>Get Solution</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header