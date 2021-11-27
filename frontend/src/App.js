import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Customers from './components/customers/customer.js'
import Stores from './components/stores/store.js'
import Products from './components/products/product.js'

const App = () => (
  <div className='app'>
    <h1>E-Commerce System</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/customer'>Customer</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/store'>Store</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/product'>Product</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to The E-Commerce System</h1>
    <p> Feel free to explore this site</p>
  </div>
);



const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Main = () => (
  <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/customer' element={<Customers/>}></Route>
    {/*<Route exact path='/store' element={<Contact/>}></Route>*/}
    <Route exact path='/store' element={<Stores/>}></Route>
    <Route exact path='/product' element={<Products/>}></Route>
  </Routes>
);

export default App;