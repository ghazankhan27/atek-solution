import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import WhyChooseUs from "./pages/WhyChooseUs";
import Industries from "./pages/Industries";
import NotFoundPage from "./pages/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/#contactform" element={<Home></Home>}></Route>
        <Route path="careers" element={<Careers></Careers>}></Route>
        <Route
          path="why-choose-us"
          element={<WhyChooseUs></WhyChooseUs>}
        ></Route>
        <Route path="industries" element={<Industries></Industries>}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
  </BrowserRouter>
);
