import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser, login, logout } from "./redux/auth/authSlice";
import { auth, onAuthStateChanged } from "./firebase.config";


import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);

  if(!user) {
    navigate("/auth/login");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );


      } else {
        dispatch(logout());
      }
    });
  }, []);


  return (
    "hiii"
  );
}

export default App;
