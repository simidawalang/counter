import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "../../components";
import { signup } from "../../redux/auth/authSlice";
import { auth } from "../../firebase.config";
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
        signup({
          uid: user.uid,
          email,
        })
      );
      toast.success("Successfully logged in");
      console.log(user);
      setTimeout(() => {
        navigate("/counter");
      }, 2000);
    } catch (e) {
      console.log(e.error)
      toast.error("Account doesn't exist");
    }
    setLoading(false);
  };

  return (
    <div>
      <ToastContainer />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <div>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
          />
          <span onClick={togglePassword}>x</span>
        </div>

        <Button content={`${loading ? "Loading" : "Login"}`} />
      </form>
    </div>
  );
};

export default Login;
