import React from 'react';
// icons
import { FiPhone, FiX } from 'react-icons/fi';
// useFecth hook
import useFetch from '../hooks/useFetch';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';


const CategoryNavMobile = ({ setCatnavMobile }) => {
  // get categories
  const { id } = useParams();  // Get the category id from the URL
  const { data: categories } = useFetch('/categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [subCategoriesData, setSubcategoriesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Fetch subcategory details
  const { data: subCategoryData } = useFetch(`/subcategories?populate=category`);

  useEffect(() => {
    if (subCategoryData) {
      setSubcategoriesData(subCategoryData);
    }
  }, [subCategoryData]);

  useEffect(() => {
    setSelectedSubcategory(searchParams.get('subcategory') || '');
  }, [id]);

  useEffect(() => {
    // Automatically select the category if the URL contains a category id
    if (categories && id) {
      const foundCategory = categories.find(category => category.id.toString() === id);
      if (foundCategory) {
        setSelectedCategory(foundCategory.id);
        // Set the subcategory from the URL if it exists
        const subcategoryFromUrl = searchParams.get('subcategory');
        if (subcategoryFromUrl) {
          setSelectedSubcategory(subcategoryFromUrl);
        }
      }
    }
  }, [categories, id, searchParams]);

  const subCategories = {};

  if (subCategoriesData) {
    subCategoriesData.forEach(item => {
      const categoryTitle = item.attributes.category.data.attributes.title;
      const subcategory = {
        id: item.id,
        title: item.attributes.title,
      };

      if (!subCategories[categoryTitle]) {
        // Initialize the array if it doesn't exist yet
        subCategories[categoryTitle] = [];
      }

      subCategories[categoryTitle].push(subcategory);
    });
  }

  const handleSubcategoryChange = (e) => {
    const selectedSubcategoryId = e.target.value;
    setSelectedSubcategory(selectedSubcategoryId);

    // Update the URL with the selected subcategory as a search parameter
    if (selectedSubcategoryId) {
      setSearchParams({ subcategory: selectedSubcategoryId });
    } else {
      // Remove the subcategory parameter if 'OΛΑ' is selected
      setSearchParams({});
    }

    // Optionally, you can navigate to a different page or perform other actions
  };

  return (
    <div className='w-full h-full bg-blue-900 p-8'>
      {/* close icon */}
      <div
        onClick={() => setCatnavMobile(false)}
        className='flex justify-end mb-8 cursor-pointer'
      >
        <FiX className='text-3xl' />
      </div>
      <h2 className='text-white text-2xl font-semibold'>Κατηγορίες</h2>
      <br/>
      <hr/>
      <div className='flex flex-col gap-y-8 mt-5'>
        {categories?.map((category) => (
            <div key={category.id} className='flex flex-col'>
              <Link
                to={`/products/${category.id}`}
                className={`cursor-pointer uppercase px-2 rounded-lg font-semibold font-sans text-white ${
                  selectedCategory === category.id
                    ? 'bg-red-800 text-white py-1'
                    : 'hover:bg-blue-800 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              >
                {category.attributes.title}
              </Link>

              {/* Dropdown for subcategories */}
              {selectedCategory === category.id && subCategories[category.attributes.title]?.length > 0 && (
                <div className='mt-2'>
                  <select 
                    value={selectedSubcategory} 
                    onChange={handleSubcategoryChange}
                    className='border rounded ml-2 px-1 py-1 text-primary mt-5 sm:mt-0 text-sm w-[95%] truncate'
                  >
                    <option value=''>OΛΑ</option>
                    {subCategories[category.attributes.title].map((subcategory) => (
                      <option key={subcategory.id} value={subcategory.id} className='truncate'>
                        {subcategory.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

            </div>
          ))}
      </div>
      <br/>
        
      <div className='mt-1'>
        {/* Other content */}
        <hr/>
        <div className='mt-auto text-white'>
          <div className='flex space-x-5 mt-4'>
            <MdOutlineMailOutline size={25} className='mr-2'/>
            info@o-m.gr
          </div>

          <div className='flex space-x-5 mt-4'>
            <RiHome2Line size={25} className='mr-2'/>
            25ης Μαρτίου 18, Πετρούπολη, Τ.Κ. 13231
          </div>

          <div className='flex space-x-5 mt-4'>
            <FiPhone size={25} className='mr-2'/>
            +30 210 5020809
          </div>

          <div className='flex space-x-5 mt-4'>
            <IoMdTime size={26} className='mr-2'/>
            Δε - Παρ 08:00 - 16:00 | Σάβ Κλειστά
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavMobile;
