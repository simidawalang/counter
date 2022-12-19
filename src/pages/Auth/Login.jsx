import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "../../components";
import { login } from "../../redux/auth/authSlice";
import {
  auth,
} from "../../firebase.config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        login({
          uid: user.uid,
          email,
        })
      );

      toast.success("Successfully logged in");
      setTimeout(() => {
        navigate("/counter");
      }, 1500);
    } catch (e) {
      console.log(e.error);
      toast.error("Account doesn't exist");
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <ToastContainer />
      <div className="auth-form__container">
        <h3 className="auth-form__header">Login</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            required
          />
          <div className="password-input">
            <Input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              required
            />
            <Button
              type="button"
              className="toggle-password"
              onClick={togglePassword}
              content={showPassword ? "Hide" : "Show"}
            />
          </div>

          <Button
            className="auth-btn"
            bgColor="green"
            content={`${loading ? "Loading" : "Login"}`}
          />
          <div className="form-link">
            <Link to="/auth/signup">Don't have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
