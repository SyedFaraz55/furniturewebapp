import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "../components/App";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Contact from "../pages/Contact";
import Logout from "../pages/Logout";
import MyAccount from "../pages/MyAccount";

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
        <Route path="/account" exact component={MyAccount} />
        {localStorage.getItem("supabase.auth.token") ? (
          <Redirect to="/" />
        ) : (
          <>
            <Route path="/signup" exact component={LoginForm} />
            <Route path="/login" component={SignUpForm} />
          </>
        )}
        <Route path="/logout" exact component={Logout} />
      </BrowserRouter>
    </>
  );
};

export default Routes;
