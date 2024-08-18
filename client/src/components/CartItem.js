import React, { useContext } from 'react';
// link
import { Link } from 'react-router-dom';
// icons
import { IoClose } from 'react-icons/io5';
// components
import Qty from '../components/Qty';
// context
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className='flex gap-x-8'>
      <Link to={`product/${item.id}`} className='w-[70px] h-[70px]'>
        <img
          src={`${item.attributes.image.data.attributes.url}`}
          alt=''
        />
      </Link>
      <div className='flex-1'>
        {/* title & remove icon */}
        <div className='flex gap-x-4 mb-3'>
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className='cursor-pointer text-[24px] hover:text-red-900 transition-all'
          >
            <IoClose />
          </div>
        </div>
        <div className='flex items-center gap-x-12'>
          {/* quantity */}
          <div className='flex gap-x-4 mb-2'>
            <Qty item={item} />
          </div>
          {/**<div className='text-red-500 text-xl font-bold'>
            $ {item.attributes.price * item.amount}
          </div>**/}
          {!item.attributes.discounted_price ? (
                <div className='text-xl font-bold text-red-500'>
                  {item.attributes.price * item.amount}€
                </div>
                ):(
                  <div className='text-xl font-bold text-red-500'>
                    {item.attributes.discounted_price * item.amount}€
                  </div>
                )}
        </div>
        {/* price */}
        <div>
          {/**<span className='text-white'>
            $ {item.attributes.price} per piece
          </span>**/}
          {!item.attributes.discounted_price ? (
                <div className='text-lg font-bold text-red-500'>
                  {item.attributes.price}€ per piece
                </div>
                ):(
                  <div className='flex space-x-3'>
                    <div className='text-md font-bold text-red-500 line-through'>
                      {item.attributes.price}€ 
                    </div>
                    <div className='text-lg font-bold text-red-500'>
                      {item.attributes.discounted_price}€ per piece
                    </div>
                  </div>
                )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
