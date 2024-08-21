import React from 'react';
// import components
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
// images
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';
import PromoImg3 from '../img/logo.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='mb-[30px] pt-36 lg:pt-0'>
      <div className='xl:container mx-auto px-5 lg:pt-5 xl:pt-0'>
        <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[10px] xl:gap-x-[30px]'>
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className='w-full max-w-lg lg:max-w-[634px] xl:max-w-[734px] mx-auto'>
            <MainSlider />
          </div>
          {/* promos */}
          <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
            {/* promo 1 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4 text-primary'>
                  Λιγα λογια <br/>για εμας
                </div>
                <Link to='/about' className='uppercase text-red-500'>
                  Δειτε εδω
                </Link>
              </div>
              {/* img */}
              <img
                className='absolute z-20 -top-5 -right-40'
                src={PromoImg3}
                alt='promo-image'
              />
            </div>
            {/* promo 1 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4 text-primary'>
                  Οι υπηρεσιες μας
                </div>
                <Link to='/services' className='uppercase text-red-500'>
                  Δειτε εδω
                </Link>
              </div>
              {/* img */}
              <img
                className='absolute z-20 -top-2 -right-4'
                src={PromoImg1}
                alt='promo-image'
              />
            </div>
            {/* promo 2 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4 text-primary'>
                  Δηλωσε τη βλαβη σου
                </div>
                <Link to='/report' className='uppercase text-red-500'>
                  Δειτε εδω
                </Link>
              </div>
              {/* img */}
              <img
                className='absolute z-20 top-4 -right-6'
                src={PromoImg2}
                alt='promo-image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

