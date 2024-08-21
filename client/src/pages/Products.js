import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';
import NoProducts from '../img/Untitled design (57).png';
import { Oval } from 'react-loader-spinner';

const Products = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState(searchParams.get('subcategory') || '');
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState('');
  const [subsubcategories, setSubsubcategories] = useState([]);
  const [title, setTitle] = useState(null);

  console.log('id', id);

  // Fetch products based on category id, filters, sorting, and subcategory
  const { data: productsData } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}` +
    `&filters[price][$gte]=${priceRange[0]}&filters[price][$lte]=${priceRange[1]}` +
    `${selectedSubcategory ? `&filters[subcategories][id][$eq]=${selectedSubcategory}` : ''}` +
    `${selectedSubsubcategory ? `&filters[subsubcategories][id][$eq]=${selectedSubsubcategory}` : ''}` +
    `${sortOption ? `&sort=${sortOption}` : ''}`
  );

  // Fetch subsubcategories based on selected subcategory
  const { data: subSubCategoryData } = useFetch(`/subcategories/${selectedSubcategory}?populate=subsubcategories`);

  useEffect(() => {
    if (subSubCategoryData) {
      const subsubcategories = subSubCategoryData?.attributes?.subsubcategories?.data || [];
      setSubsubcategories(subsubcategories);
    }
  }, [subSubCategoryData]);

  useEffect(() => {
    setSelectedSubcategory(searchParams.get('subcategory') || '');
  }, [searchParams]);

  useEffect(() => {
    if (productsData && productsData.length > 0) {
      setTitle(productsData[0].attributes.categories.data[0].attributes.title);
    }
  }, [productsData]);

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

  const handleSubsubcategoryChange = (event) => {
    const newSubsubcategory = event.target.value;
    setSelectedSubsubcategory(newSubsubcategory);
  };

  if (!productsData) {
    return (
      <div className='container mx-auto flex space-x-3 text-primary'>
        <h2 className="text-[30px]">loading...</h2>
        <Oval
          visible={true}
          height="40"
          width="40"
          color="#000000"
          ariaLabel="oval-loading"
        />
      </div>
    );
  }

  return (
    <div className='mb-16 pt-40 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex gap-x-[30px]'>
          <CategoryNav />
          <main>
            {/* title */}
            <div className='py-3 text-xl uppercase text-center lg:text-left text-primary'>
              {title}
            </div>

            
            
            {/* Filter and Sorting Section */}
            <div className='flex flex-col md:flex-row justify-between mb-6'>
              {/* Price Range Filter */}
              <div>
                <label className='text-primary'>
                  Από:
                  <input
                    type='number'
                    name='min'
                    value={priceRange[0]}
                    onChange={handlePriceRangeChange}
                    className='border rounded px-1 py-1 text-primary ml-2 w-[70px]'
                  />
                </label>
                <label className='ml-4 text-primary'>
                  Έως:
                  <input
                    type='number'
                    name='max'
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className='border rounded px-1 py-1 text-primary ml-2 w-[70px]'
                  />
                </label>
              </div>
              {/* Subsubcategories Dropdown */}
              <div>
              {subsubcategories?.length > 0 && (
                <div className='py-1'>
                  <label className='text-primary'>
                    Υποκατηγορία:
                    <select 
                      value={selectedSubsubcategory} 
                      onChange={handleSubsubcategoryChange}
                      className='border rounded ml-2 px-1 py-1 text-primary w-[150px] truncate'
                    >
                      <option value=''>OΛΑ</option>
                      {subsubcategories.map((subsubcategory) => (
                        <option key={subsubcategory.id} value={subsubcategory.id} className='truncate'>
                          {subsubcategory?.attributes?.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}
              </div>
              {/* Sorting Options */}
              <div>
                <label className='text-primary'>
                  Ταξινόμηση:
                  <select value={sortOption} onChange={handleSortChange} className='border rounded ml-2 px-1 py-1 text-primary mt-5 sm:mt-0'>
                    <option value=''>Προεπιλογή</option>
                    <option value='price:asc'>Τιμή: Low to High</option>
                    <option value='price:desc'>Τιμή: High to Low</option>
                    <option value='title:asc'>Αλφαβητικά: A-Ω</option>
                    <option value='title:desc'>Αλφαβητικά: Ω-A</option>
                  </select>
                </label>
              </div>
            </div>
            <hr/>
            {/* Product Grid or No Products Message */}
            {productsData && productsData.length > 0 ? (
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
                {productsData.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            ) : (
              <div className='text-center py-6 text-lg font-semibold text-gray-600 max-w-full'>
                <img src={NoProducts} alt='no-products-found' className='w-full mx-auto' />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
