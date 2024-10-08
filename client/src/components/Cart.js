import React, { useContext } from 'react';
// icons
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';
// components
import CartItem from '../components/CartItem';
// stripe
import { loadStripe } from '@stripe/stripe-js';
import { request } from '../request';

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_KEY
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post('/orders', {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full px-4 text-primary'>
      <div className='overflow-y-auto overflow-x-hidden h-[75vh]'>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
        >
          <IoClose />
        </div>
        <div className='flex flex-col gap-y-10 px-2'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className='px-6 py-10 flex flex-col'>
          {/* subtotal */}
          <div className='flex justify-between text-lg'>
            <div>Υποσύνολο</div>
            <div>{total} €</div>
          </div>
          {/* total */}
          <div className='flex justify-between text-2xl'>
            <div>Σύνολο</div>
            <div>{total} €</div>
          </div>
        </div>
      )}
{/* buttons */}
      <div className='px-6'>
        {cart.length >= 1 ? (
          <div className='flex justify-between gap-x-4'>
            <button
              onClick={clearCart}
              className='btn btn-accent hover:bg-red-900 text-white bg-blue-800'
            >
              Καθαρισμος
            </button>
            <button
              className='btn btn-accent hover:bg-red-900 flex-1 px-2 gap-x-2 text-white bg-red-500'
            >
              Τηλ. 2621023881
              <IoArrowForward className='text-lg' />
            </button>
          </div>
        ) : (
          <div className='h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30'>
            <div className='text-2xl text-primary'>Το καλάθι σας είναι άδειο</div>
            <div className='text-6xl'>
              <IoCartOutline className='text-primary'/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
