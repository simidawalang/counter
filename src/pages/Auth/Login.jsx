import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { login } from "../../redux/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handlePasssword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      login({
        user: {
          user: username,
          password,
        },
        loggedIn: true,
      })
    );
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Email / username"
          value={username}
          onChange={handleUsername}
          required
        />
        <Input
          type={`${showPassword ? "text" : "password"}`}
          placeholder="Password"
          value={password}
          onChange={handlePasssword}
        />
        <Button content={`${loading ? "Loading" : "Login"}`} />
        <Button content={`${loading ? "Loading" : "Log in with Google"}`} />
      </form>
    </div>
  );
};

export default Login;
