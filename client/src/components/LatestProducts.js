import React from 'react';
// components
import ProductSlider from '../components/ProductSlider';
// useFetch hook
import useFetch from '../hooks/useFetch.js';

const LatestProducts = () => {
  // get new products
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');
  return (
    <div className='mb-16 mt-5'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-7 text-center xl:text-left text-primary'><span className='p-2 bg-red-500 rounded-lg text-white'>Νέα</span> προιόντα</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;

