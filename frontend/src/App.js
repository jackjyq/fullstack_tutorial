import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Customers from './components/customers/customer.js'
import Login from './components/login/login.js'


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
      <li><NavLink exact activeClassName="current" to='/'>Login</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/customer'>customer</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/store'>Store</NavLink></li>
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
    <Route exact path='/' element={<Login/>}></Route>
    <Route exact path='/customer' element={<Customers/>}></Route>
    <Route exact path='/store' element={<Contact/>}></Route>
  </Routes>
);

export default App;