import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { login } from "../../redux/auth/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const handleDisplayName = (e) => {
    const { value } = e.target;
    setDisplayName(value);
  };
  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e) => {
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
          email,
          password,
        },
        loggedIn: true,
      })
    );
  };

  useEffect(() => {
    if (currentUser) navigate("/counter");
  }, [currentUser]);

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={handleDisplayName}
          required
        />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <Input
          type={`${showPassword ? "text" : "password"}`}
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        <Button content={`${loading ? "Loading" : "Login"}`} />
      </form>
    </div>
  );
};

export default Signup;
