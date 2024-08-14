import React, { useContext } from 'react';
// context
import { CartContext } from '../context/CartContext';

const Qty = ({ item }) => {
  const { handleSelect, handleInput } = useContext(CartContext);
  return (
    <div className='flex gap-x-6 items-center text-primary'>
    <input
      type='number'
      value={item.amount}
      onChange={(e) => handleSelect(e, item.id)}
      className='text-primary h-12 rounded-md p-4 w-[80px] outline-red-500 text-center'
      min='1'
      max='10'
    />
    </div>
  );
};

export default Qty;
