import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, logout, selectCurrentUser } from "../../redux/auth/authSlice";
import {
  signOut,
  auth,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../../firebase.config";
import { Button, Input } from "../index";

const Counter = () => {
  const user = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  console.log(user);

  const handleAdd = (e) => {
    setCount((prev) => prev + +inputValue);
  };

  const handleSubtract = (e) => {
    setCount((prev) => prev - +inputValue);
  };
  const handleLogout = () => {
    dispatch(logout());

    auth.signOut();
    navigate("/auth/login");
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="counter-page">
      <p>Signed in as <span className="user-email">{user?.email}</span></p>
      <div className="counter-container">
        <h3 className="counter-header">Counter</h3>
        <div className="counter">
          <div className="count-tracker">
            <h3 className="live-count">{count}</h3>
            <div className="counter-btns">
              <Button
                className="sub-btn"
                bgColor="green"
                onClick={handleSubtract}
                content="Decrease"
              />
              <Button
                className="add-btn"
                bgColor="green"
                onClick={handleAdd}
                content="Increase"
              />
            </div>
          </div>

          <div className="count-step">
            <span>Counter step: </span>
            <Input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <Button className="logout-btn" onClick={handleLogout} content="Logout" bgColor="red" />
        </div>
      </div>
      
    </div>
  );
};

export default Counter;
