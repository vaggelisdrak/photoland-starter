import React, { useState, useEffect } from 'react';
// useParams hook
import { useParams, useSearchParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';
// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';
import NoProducts from '../img/Untitled design (57).png';
import { Oval } from 'react-loader-spinner';

const Products = () => {
  const { id } = useParams();
  //get subcategory from url search params
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams',searchParams.get('subcategory'))
    
  // State for filters
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState(searchParams.get('subcategory'));

  console.log('selected sub',selectedSubcategory)
  
  // Fetch products based on category id, filters, sorting, and subcategory
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}` +
    `&filters[price][$gte]=${priceRange[0]}&filters[price][$lte]=${priceRange[1]}` +
    `${selectedSubcategory ? `&filters[subcategories][id][$eq]=${selectedSubcategory}` : ''}` +
    `${sortOption ? `&sort=${sortOption}` : ''}`
  );

  // State for category title and subcategories
  const [title, setTitle] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  
  // Fetch sub sub category details
  //const { data: categoryData } = useFetch(`/subcategories/${selectedSubcategory}?populate=subsubcategories`);
  const { subsubcategoriesData } = useFetch(`/subsubcategories`);
  console.log('categoryDataaa',subsubcategoriesData)

  // Reset selectedSubcategory when id changes
  useEffect(() => {
    setSelectedSubcategory('');
  }, [id]);
  
  // Set the title and subcategories when main product data is fetched
  useEffect(() => {
    if (data && data.length > 0) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  /*useEffect(() => {
    if (categoryData && categoryData.attributes.subcategories.data) {
      setSubcategories(categoryData.attributes.subcategories.data);
    }
  }, [categoryData]);*/

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

  // Handle subcategory change
  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

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

            {/* Subcategories 
            {subcategories.length > 0 && (
              <div className='my-6'>
                <div className='flex flex-wrap gap-4'>
                  {subcategories.map((subcategory) => (
                    <div key={subcategory.id} className='bg-blue-800 p-2 rounded-lg text-sm'>
                      {subcategory.attributes.title}
                    </div>
                  ))}
                </div>
              </div>
            )}*/}
            
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
              {/* Subcategory Filter 
              <div>
              {subcategories.length > 0 && (
                <div>
                  <label className='text-primary'>
                    Υποκατηγορία:
                    <select 
                      value={selectedSubcategory} 
                      onChange={handleSubcategoryChange}
                      className='border rounded ml-2 px-1 py-1 text-primary mt-5 sm:mt-0'
                    >
                      <option value=''>OΛΑ</option>
                      {subcategories.map((subcategory) => (
                        <option key={subcategory.id} value={subcategory.id}>
                          {subcategory.attributes.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}
              </div>*/}

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
            {/* Product Grid or No Products Message */}
            {data && data.length > 0 ? (
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
                {data.map((product) => (
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
