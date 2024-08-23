import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import { Pagination, Navigation } from 'swiper';
// components
import Product from '../components/Product';

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      slidesPerView={1}  // Show one slide at a time
      breakpoints={{
        320: {
          slidesPerView: 1,  // Show one image per slide on small screens
        },
        768: {
          slidesPerView: 1,  // Show one image per slide on medium screens
        },
        1024: {
          slidesPerView: 1,  // Show one image per slide on larger screens
        },
      }}
      pagination={{
        clickable: true,
      }}
      className='productSlider mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1410px]'
    >
      <>
        {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.attributes.url}
            alt={`Image ${index + 1}`}
            className='w-full h-auto object-cover'
          />
        </SwiperSlide>
      ))}
      </>
    </Swiper>
  );
};

export default ImageSlider;
