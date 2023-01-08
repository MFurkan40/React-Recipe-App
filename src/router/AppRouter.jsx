import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import { useState } from "react";
import Navbar from "./../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import PrivateRouter2 from "./PrivateRouter2";
import Register from "../pages/register/Register";

const AppRouter = () => {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar setAuth={setAuth} auth={auth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setAuth={setAuth} />} />

        <Route path="about" element={<PrivateRouter auth={auth} />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="/register" element={<PrivateRouter2 auth={auth} />}>
          <Route path="" element={<Register />} />
        </Route>

        <Route path="detail" element={<PrivateRouter auth={auth} />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
