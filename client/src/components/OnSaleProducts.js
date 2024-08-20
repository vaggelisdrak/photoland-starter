import React from 'react';
// components
import ProductSlider from '../components/ProductSlider';
// useFetch hook
import useFetch from '../hooks/useFetch.js';

const OnSaleProducts = () => {
  // get new products
  const { data } = useFetch('/products?populate=*&filters[discounted_price][$gt]=0');
  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-7 text-center xl:text-left text-primary'>Προιόντα σε <span className='p-2 bg-red-500 rounded-lg text-white'>Έκπτωση</span></h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default OnSaleProducts;
