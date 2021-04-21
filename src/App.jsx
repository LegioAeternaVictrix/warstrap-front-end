import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Background from "./components/common/Background";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import NotFound from "./components/NoFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { fetchUser } from "./store/slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <ToastContainer autoClose={1400} />
      <Background />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/settings" component={Settings}></Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
