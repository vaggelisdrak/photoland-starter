import React, { useContext } from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFecth hook
import useFetch from '../hooks/useFetch';
// components
import RelatedProducts from '../components/RelatedProducts';
// context
import { CartContext } from '../context/CartContext';
import { Oval } from 'react-loader-spinner';
import ImageSlider from '../components/ImageSlider';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  // get product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  
  if (!data) {
   // return <div className='container mx-auto'>loading...</div>;
   return <div className='container mx-auto flex space-x-3 text-primary'>
    <h2 className="text-[30px]">loading...</h2>
    <Oval
    visible={true}
    height="40"
    width="40"
    color="#000000"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  }
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  console.log(data[0].attributes.description);

  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
          <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
            {/*<img
              src={`${data[0].attributes.image.data[0].attributes.url}`}
              alt=''
              className='w-full max-w-[65%]'
            />*/}
            <ImageSlider images={data[0].attributes.image.data} />
          </div>
          <div className='flex-1 bg-white p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
            {/* category title */}
            <div className='uppercase text-red-500 text-lg font-medium mb-2 '>
              {data[0].attributes.categories.data[0].attributes.title}
            </div>
            {/* title */}
            <h2 className='h2 mb-4 text-primary'>{data[0].attributes.title}</h2>
             {/* subcategory title */}
            {data[0]?.attributes?.subcategories?.data[0]?.attributes?.title && (
              <div className='uppercase text-blue-800 text-md font-medium mb-2 '>
                {data[0].attributes?.subcategories?.data[0].attributes.title} 
              </div>
            )}
            {/* description */}
            <p className='mb-12 text-primary'>
            <ul>
              {data[0].attributes.description.split('•').map((item, index) => (
                item.trim() && (
                  <li key={index} className={index === 0 ? 'mb-5 list-none' : 'list-disc ml-5'}>
                    {item.trim()}
                  </li>
                )
              ))}
            </ul>
          </p>


            {/* price & btn */}
            <div className='flex items-center gap-x-8'>
              {/* price */}
              {!data[0].attributes.discounted_price ? (
                <div className='text-xl font-bold text-red-500'>
                  {data[0].attributes.price === 0 ? '' : `${data[0].attributes.price}€`}
                </div>
                ):(
                  <div >
                    <div className='text-lg font-bold text-red-500 line-through'>
                      {data[0].attributes.price}€
                    </div>
                    <div className='text-xl font-bold text-red-500'>
                      {data[0].attributes.discounted_price}€
                    </div>
                  </div>
                )}
              <button
                onClick={() => addToCart(data, id)}
                className='btn btn-accent text-white'
              >
                Προσθεστε
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
