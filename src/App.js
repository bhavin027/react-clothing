import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';

function App() {
  return (
    <div>
    	<Header />
    	<Switch>
    		<Route exact path='/' component={HomePage} />
    		<Route path='/shop' component={ShopPage} />
    		<Route path='/signin' component={SignInSignUp} />
    	</Switch>
    </div>
  );
}

export default App;
