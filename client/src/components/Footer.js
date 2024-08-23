import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import LG_logo from '../img/company_logo/LG_logo.png';
import Samsung_logo from '../img/company_logo/Samsung_logo.png';
import Toshiba_logo from '../img/company_logo/TOSHIBA_Logo.png';
import Carrier_logo from '../img/company_logo/Carrier_logo.png';
import Liebherr_logo from '../img/company_logo/Liebherr_logo.png';
import Eskimo_logo from '../img/company_logo/ESKIMO_logo.png';
import FUJITSU_logo from '../img/company_logo/FUJITSU_logo.png';
import Hisense_logo from '../img/company_logo/Hisense-Logo.jpg';
import Gorenje_logo from '../img/company_logo/gorenje_logo.png';
import Korting_logo from '../img/company_logo/korting-logo.png';
import Hitachi_logo from '../img/company_logo/Hitachi-Logo.png';
import Davoline_logo from '../img/company_logo/davoline_logo.png';
import Pyramis_logo from '../img/company_logo/pyramis_logo.png';
import Inventor_logo from '../img/company_logo/Inventor_Ras_CMYK_Poss_Slogan-Converted.png';
import Toyotomi_logo from '../img/company_logo/toyotomi.png';
import Gree_logo from '../img/company_logo/gree.jpg';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { IoMdTime } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='pt-16 bg-white'>
      <div className='container mx-auto'>
        <h2 className='h2 uppercase mb-8 font-semibold text-primary text-center text-[22px]'>
            Οι Συνεργατες μας
          </h2>
        <div className='flex flex-wrap gap-y-6 gap-x-4 lg:gap-x-10 items-center justify-center lg:justify-between mb-14'>
          <img src={LG_logo} alt='LG logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Inventor_logo} alt='Inventor logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Samsung_logo} alt='Samsung logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Toshiba_logo} alt='Toshiba logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Carrier_logo} alt='Carrier logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Liebherr_logo} alt='Liebherr logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Eskimo_logo} alt='Eskimo logo' className='w-[160px] h-[80px] sm:w-[180px] sm:h-[90px] md:w-[200px] md:h-[120px]' />
          <img src={FUJITSU_logo} alt='FUJITSU logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Hisense_logo} alt='Hisense logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Gorenje_logo} alt='Gorenje logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Korting_logo} alt='Korting logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Hitachi_logo} alt='Hitachi logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Davoline_logo} alt='Davoline logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Pyramis_logo} alt='Pyramis logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Toyotomi_logo} alt='Toyotomi logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
          <img src={Gree_logo} alt='Gree logo' className='w-[80px] sm:w-[100px] md:w-[120px]' />
        </div>
        <br/>
        {/*<div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold text-primary'>
            Subscribe to our newsletter
          </h2>
          <p className='text-primary/70'>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
          <input
            type='text'
            placeholder='Your email address'
            className='input border border-primary/60'
          />
          <button className='btn btn-accent min-w-[150px] text-white bg-red-500'>Join</button>
        </form>*/}
        {/* links */}
        <div className='flex justify-between space-x-4'>
          <div className='mt-1'>
          {/* Other content */}
          <div className='mt-auto text-primary'>
            <div className='flex space-x-5 mt-5'>
              <MdOutlineMailOutline size={25} className='mr-2'/>
              info@thermoclimatistiki.gr
            </div>

            <div className='flex space-x-5 mt-5'>
              <RiHome2Line size={25} className='mr-2'/>
              Αλφείου 50 Πύργος, Ηλείας
            </div>

            <div className='flex space-x-5 mt-5'>
              <FiPhone size={25} className='mr-2'/>
              +30 2621023881
            </div>

            <div className='flex space-x-5 mt-5'>
              <IoMdTime size={26} className='mr-2'/>
              Δε - Σαβ 8:30-3:00
            </div>
          </div>
        </div>
          <div className='text-base text-primary/60 mx-auto mb-9 mt-5'>
            <a href='#' className='hover:text-primary transition-all '>
              Returns policy
            </a>
            <br/>
            <br/>
            <a href='#' className='hover:text-primary transition-all '>
              Track your order
            </a>
            <br/>
            <br/>
            <a href='#' className='hover:text-primary transition-all'>
              Shipping & delivery
            </a>
            <br/>
            <br/>
            <a href='#' className='hover:text-primary transition-all '>
              Shipping & delivery
            </a>
          </div>
          {/* socials */}
          <div className=' max-w-max mx-auto text-lg mb-10 mt-5'>
            <a href='#' className='hover:text-red-500 transition-all text-primary'>
              <FaYoutube />
            </a>
            <br/>
            <a href='#' className='hover:text-red-500 transition-all text-primary'>
              <FaInstagram />
            </a>
            <br/>
            <a href='#' className='hover:text-red-500 transition-all text-primary '>
              <FaTwitter />
            </a>
            <br/>
            <a href='#' className='hover:text-red-500 transition-all text-primary'>
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      {/* copyright */}
      <hr/>
      <div className='py-5 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-primary/60'>
            Copyright &copy; Thermoklimatistikh 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

