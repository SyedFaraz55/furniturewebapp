import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route,  } from "react-router-dom";
import Home from "../components/App";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Contact from "../pages/Contact";
import Logout from "../pages/Logout";
import MyAccount from "../pages/MyAccount";
import Shop from '../components/Shop'
import Cart from '../pages/Cart'
import ProtectedRoute from '../components/ProtectedRoute'
import "../style.css";

const Routes = () => {
  useLayoutEffect(() => {
    console.log(localStorage.getItem("uuid"), "header");
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <ProtectedRoute path="/account" exact component={MyAccount} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />

            <Route path="/signup" exact component={LoginForm} />
            <Route path="/login" exact component={SignUpForm} />

        <Route path="/logout" exact component={Logout} />

      </BrowserRouter>
    </>
  );
};

export default Routes;
