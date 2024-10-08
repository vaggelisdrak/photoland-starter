import React, { useEffect, useState } from 'react';
// icons
import { FiSearch } from 'react-icons/fi';
// useNavigate hook
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout event
    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value = '';
      setSearchTerm('');
    } else {
      // if input is empty set animation to true
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isAnimating ? 'animate-shake' : 'animate-none'
      } w-full relative`}
    >
      <input
        onChange={handleSearchInput}
        className='input border-2 border-gray-300 w-full'
        type='text'
        placeholder='Αναζητήστε κάποιο προιόν...'
      />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none bg-red-500'>
        <FiSearch className='text-xl text-white' />
      </button>
    </form>
  );
};

export default SearchForm;
