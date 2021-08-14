import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/App'
import Header from '../components/Header';
import Contact from '../pages/Contact';
import MyAccount from '../pages/MyAccount';
import '../style.css'
const Routes = ()=> {
    return (
       <>
        <BrowserRouter>
        <Header />
            <Route path="/"  exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/account" component={MyAccount} />
        </BrowserRouter>
       </>
    )
};

export default Routes