import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout, selectCurrentUser } from "../../redux/auth/authSlice";

import { Button } from "../index";

const Counter = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };
  console.log(user);

  return (
    <div>
      <p>Signed in as</p>
      <div className="counter">
        <p>Counter</p>
        <Button onClick={handleLogout} content="Logout" />
      </div>
    </div>
  );
};

export default Counter;
