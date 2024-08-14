import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='pt-16 bg-white'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold text-primary'>
            Subscribe to our newsletter
          </h2>
          <p className='text-primary/70'>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>
        {/* form */}
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
          <input
            type='text'
            placeholder='Your email address'
            className='input border border-primary/60'
          />
          <button className='btn btn-accent min-w-[150px] text-white bg-red-500'>Join</button>
        </form>
        {/* links */}
        <div className='text-base text-primary/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
          <a href='#' className='hover:text-primary transition-all'>
            Returns policy
          </a>
          <a href='#' className='hover:text-primary transition-all'>
            Track your order
          </a>
          <a href='#' className='hover:text-primary transition-all'>
            Shipping & delivery
          </a>
        </div>
        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-10'>
          <a href='#' className='hover:text-red-500 transition-all text-primary'>
            <FaYoutube />
          </a>
          <a href='#' className='hover:text-red-500 transition-all text-primary'>
            <FaInstagram />
          </a>
          <a href='#' className='hover:text-red-500 transition-all text-primary'>
            <FaTwitter />
          </a>
          <a href='#' className='hover:text-red-500 transition-all text-primary'>
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* copyright */}
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

