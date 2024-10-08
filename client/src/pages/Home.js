import React from 'react';

// import components
import LatestProducts from '../components/LatestProducts.js';
import Hero from '../components/Hero.js';
import OnSaleProducts from '../components/OnSaleProducts.js';

const Home = () => {
  return (
    <section>
      <Hero />
      <br/>
      <LatestProducts />
      <OnSaleProducts />
    </section>
  );
};

export default Home;

