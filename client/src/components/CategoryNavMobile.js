import React from 'react';
// icons
import { FiPhone, FiX } from 'react-icons/fi';
// link
import { Link } from 'react-router-dom';
// useFecth hook
import useFetch from '../hooks/useFetch';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';

const CategoryNavMobile = ({ setCatnavMobile }) => {
  // get categories
  const { data } = useFetch('/categories');

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
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              className='uppercase font-medium'
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          );
        })}
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
