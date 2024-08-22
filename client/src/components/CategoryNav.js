import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CategoryNav = () => {
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
    <aside className='hidden lg:flex'>
      <div className='bg-white flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
        <div className='bg-red-500 py-4 text-white uppercase font-semibold flex items-center justify-center'>
          Κατηγοριες προιoντων
        </div>
        <div className='flex flex-col gap-y-6 p-6 text-primary'>
          {categories?.map((category) => (
            <div key={category.id} className='flex flex-col'>
              <Link
                to={`/products/${category.id}`}
                className={`cursor-pointer uppercase px-2 rounded-lg font-semibold font-sans ${
                  selectedCategory === category.id
                    ? 'bg-blue-800 text-white'
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
                    className='border rounded ml-2 px-1 py-1 text-primary mt-5 sm:mt-0 text-sm w-[220px] truncate'
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
      </div>
    </aside>
  );
};

export default CategoryNav;
