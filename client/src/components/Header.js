import React, { useContext, useState } from 'react';
// images
import Logo from '../img/logo.png';
// icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
import { FiPhone } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
// link
import { Link } from 'react-router-dom';
// components
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart';
// cart context
import { CartContext } from '../context/CartContext';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);
  const [catNavMobile, setCatnavMobile] = useState(false);

  return (
    <header className='bg-white py-6 fixed w-full top-0 z-40  mb-[30px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
          {/* menu */}
          <div
            onClick={() => setCatnavMobile(true)}
            className='text-3xl lg:hidden cursor-pointer mt-3'
          >
            <FiMenu className='text-black' />
          </div>

          {/* category nav mobile */}
          <div
            className={`${
              catNavMobile ? 'left-0' : '-left-full'
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatnavMobile={setCatnavMobile} />
          </div>

          {/* logo */}
          <Link to={'/'}>
            <img src={Logo} alt='' className='h-12 w-35' />
          </Link>

          {/* searchform - show only on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>

          {/* phone & cart */}
          <div className='flex items-center gap-x-[16px]'>
            {/* home */}
            <div className='hidden lg:flex uppercase text-primary'>
              <Link to='/'><RiHome2Line className='text-3xl text-primary'/></Link>
            </div>

            {/* phone */}
             <div className="relative">
              {/* Trigger for the Pop-up */}
              <div
                className="hidden lg:flex uppercase text-primary cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              >
                <FiPhone className="text-3xl text-primary" />
              </div>
            </div>

            {/* cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='relative cursor-pointer'
            >
              <SlBag className='text-3xl text-primary' />

              {/* amount */}
              <div className='bg-red-500 text-white absolute w-[18px] h-[18px] rounded-full top-5 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>
                {itemsAmount}
              </div>
            </div>

            {/* cart */}
            <div
              className={`
              ${isOpen ? 'right-0' : '-right-full'}
              bg-slate-100 shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>

            {/* contact info */}
            <div
              className={`
              ${isVisible? 'right-0' : '-right-full'}
              bg-slate-100 shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <div className='overflow-y-auto overflow-x-hidden h-[75vh] px-4'>
                {/* close icon */}
                  <div
                    onClick={() => setIsVisible(false)}
                    className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer text-primary'
                  >
                    <IoClose />
                  </div>

                  <h2 className='text-primary text-2xl font-semibold mb-8'>Στοιχεία επικοινωνίας</h2>
                  
                  <div className='text-primary'>
                    <div className='flex space-x-5 mt-4'>
                      <MdOutlineMailOutline size={25} className='mr-2'/>
                      info@o-m.gr
                    </div>

                    <div className='flex space-x-5 mt-4'>
                      <RiHome2Line size={25} className='mr-2'/>
                      25ης Μαρτίου 18, Πετρούπολη, Τ.Κ. 13231
                    </div>

                    <div className='flex space-x-5 mt-4'>
                      <FiPhone size={25} className='mr-2'/>
                      +30 210 5020809
                    </div>

                    <div className='flex space-x-5 mt-4'>
                      <IoMdTime size={26} className='mr-2'/>
                      Δε - Παρ 08:00 - 16:00 | Σάβ Κλειστά
                    </div>
                  </div>
                </div>  
            </div>
          </div>
        </div>

        {/* searchform - show on mobile only */}
        <div className='xl:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
