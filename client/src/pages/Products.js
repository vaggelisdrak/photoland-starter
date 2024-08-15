import React, { useState, useEffect } from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';
// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const { id } = useParams();
  
  // State for filters
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('');

  // Get products based on category id, filters, and sorting
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}` +
    `&filters[price][$gte]=${priceRange[0]}&filters[price][$lte]=${priceRange[1]}` +
    `${sortOption ? `&sort=${sortOption}` : ''}`
  );

  const [title, setTitle] = useState(null);

  // Set the title when the data is fetched
  useEffect(() => {
    if (data && data.length > 0) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  // Handle price range change
  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => {
      return name === 'min' ? [Number(value), prevRange[1]] : [prevRange[0], Number(value)];
    });
  };

  // Handle sorting change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className='mb-16 pt-40 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex gap-x-[30px]'>
          <CategoryNav />
          <main>
            {/* title */}
            <div className='py-3 text-xl uppercase text-center lg:text-left text-primary'>
              {title} cameras
            </div>
            <br />
            {/* Filter and Sorting Section */}
            <div className='flex flex-col md:flex-row justify-between mb-6'>
              {/* Price Range Filter */}
              <div>
                <label className='text-primary'>
                  Min Price:
                  <input
                    type='number'
                    name='min'
                    value={priceRange[0]}
                    onChange={handlePriceRangeChange}
                    className='border rounded px-1 py-1 text-primary ml-2 w-[70px]'
                  />
                </label>
                <label className='ml-4 text-primary'>
                  Max Price:
                  <input
                    type='number'
                    name='max'
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className='border rounded px-1 py-1 text-primary ml-2 w-[70px]'
                  />
                </label>
              </div>

              {/* Sorting Options */}
              <div>
                <label className='text-primary'>
                  Sort By:
                  <select value={sortOption} onChange={handleSortChange} className='border rounded ml-2 px-1 py-1 text-primary mt-5 sm:mt-0'>
                    <option value=''>None</option>
                    <option value='price:asc'>Price: Low to High</option>
                    <option value='price:desc'>Price: High to Low</option>
                    <option value='title:asc'>Alphabetical: A-Z</option>
                    <option value='title:desc'>Alphabetical: Z-A</option>
                  </select>
                </label>
              </div>
            </div>
            {/* product grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
