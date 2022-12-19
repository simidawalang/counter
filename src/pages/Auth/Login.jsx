import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "../../components";
import { login } from "../../redux/auth/authSlice";
import { auth } from "../../firebase.config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    console.log(1)
    setLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      setTimeout(() => {
        navigate("/counter");
      }, 1500);


      console.log(user);
    } catch (e) {
      toast.error("Fail");
    }
    setLoading(false);
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
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

export default Login;
