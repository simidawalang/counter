import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { auth, createUserWithEmailAndPassword } from "../../firebase.config";
import { signup } from "../../redux/auth/authSlice";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const handleDisplayName = (e) => {
    const { value } = e.target;
    setDisplayName(value);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName,
        email,
      });

      dispatch(
        signup({
          uid: user.uid,
          displayName,
          email,
        })
      );
      toast.success("Account successfully created");
      console.log(user);
      setTimeout(() => {
        navigate("/counter");
      }, 2000);
    } catch (e) {
      if (e.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser) navigate("/counter");
  }, [currentUser]);

  return (
    <div className="auth-page">
      <ToastContainer />
      <div className="auth-form__container">
        <h3 className="auth-form__header">Create Account</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={handleDisplayName}
            required
          />
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
            content={`${loading ? "Loading" : "Sign up"}`}
          />
          <div className="form-link">
            <Link to="/auth/login">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
