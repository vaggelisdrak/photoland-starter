import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Services from './pages/Services';
import { About } from './pages/About';
import Report from './pages/Report';


const Layout = () => {
  return (
    <div>
      <Header />
      <div className='hidden sm:block h-[130px]'></div>
      <br/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/report',
        element: <Report/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <ProductDetails/>
      },
      {
        path: '/search',
        element: <Search/>
      },
      {
        path: '/services',
        element: <Services/>
      }

    ]
  }
]);

const App = () => {
  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
};

export default App;
