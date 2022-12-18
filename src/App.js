import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages";
import { Counter } from "./components";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/auth/authSlice";
import "./App.scss";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route exact path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
