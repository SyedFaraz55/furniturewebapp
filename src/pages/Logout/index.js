import { Button } from "@chakra-ui/button";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Logout = (props) => {
  const [state, setState] = useState("");
  useEffect(() => {
    setState(localStorage.getItem("supabase.auth.token"));
  }, []);
  const logout = () => {
    setState("");
    localStorage.removeItem("supabase.auth.token");
    window.location.href = "/";
  };

  return (
    <>
      {state ? (
        <Button variant="link" onClick={logout}>
          logout
        </Button>
      ) : (
        <Link to="/login">Login/Signup</Link>
      )}
    </>
  );
};

export default Logout;
