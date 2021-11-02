import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/index';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopItem from './pages/ShopItem';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router basename="/">
      <Navbar />

      <ScrollToTop />
      <Switch>
        <Route exact path='/shopping-cart/'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/shopItem/:id'>
          <ShopItem />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
