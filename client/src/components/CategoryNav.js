import React from 'react';
// useFetch hook
import useFetch from '../hooks/useFetch';
// link
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  return (
    <aside className='hidden xl:flex'>
      <div className='bg-white flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
        <div className='bg-red-500 py-4 text-white uppercase font-semibold flex items-center justify-center'>
          Browse Categories
        </div>
        <div className='flex flex-col gap-y-6 p-6 text-primary '>
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className='cursor-pointer uppercase px-2 rounded-lg hover:bg-blue-800 hover:text-white'
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
