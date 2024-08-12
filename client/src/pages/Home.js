import React from 'react';

// import components
import LatestProducts from '../components/LatestProducts.js';
import Hero from '../components/Hero.js';
import useFetch from '../hooks/useFetch.js';

const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;

