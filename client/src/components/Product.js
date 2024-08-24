import React from 'react';
// link
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  // console.log(product);
  return (
    <Link to={`/product/${product.id}`}>
      <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
        {/* badge */}
        {product.attributes.isNew ? (
          <div className='absolute bg-blue-800 text-white text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
            new
          </div>
        ) : (
          ''
        )}
        {product.attributes.discounted_price ? (
          <div className='absolute bg-blue-800 text-white text-[13px] font-extrabold uppercase top-4 left-4 px-2 rounded-full z-10'>
            -{((product.attributes.price - product.attributes.discounted_price) / product.attributes.price * 100).toFixed(0)}%
          </div>
        ) : null}

        {/* image */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          <img
            className='w-[160px] h-[160px] group-hover:scale-90 transition-all '
            src={`${product.attributes.image.data[0].attributes.url}`}
            alt='product-image'
          />
        </div>
        {/* text */}
        <div className='px-6 pb-8 flex flex-col'>
          {/* category title */}
          <div className='text-sm text-red-500 capitalize mb-2'>
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className='text-[15px] mb-4 lg:mb-9 text-primary'>
            {product.attributes.title.substring(0, 50)}...
          </div>
          {/* price */}
          {!product.attributes.discounted_price ? (
            <div className='text-lg font-bold text-red-500'>
              {product.attributes.price}€
            </div>
            ):(
              <div >
                <div className='text-md font-bold text-red-500 line-through'>
                  {product.attributes.price}€
                </div>
                <div className='text-lg font-bold text-red-500'>
                  {product.attributes.discounted_price}€
                </div>
              </div>
            )}
        </div>
      </div>
    </Link>
  );
};

export default Product;

