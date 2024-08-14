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
        <h2 className='h2 mb-6 text-center xl:text-left'>Products on Sale</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default OnSaleProducts;
