import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ handleLogout }) => {
  let navigate = useNavigate();
  useEffect(() => {
    handleLogout();
    navigate("/login");
  }, []);
  return <></>;
};

export default LogOut;
