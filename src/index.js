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
import SupportConsulting from "./pages/SupportConsulting";
import CloudSolutions from "./pages/CloudSolutions";
import FinancialServices from "./pages/FinancialServices";
import HealthCareStaffing from "./pages/HealthCareStaffing";
import ConstructionStaffing from "./pages/ConstructionStaffing";
import EngineeringSupport from "./pages/EngineeringSupport";

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
        <Route
          path="support-consulting"
          element={<SupportConsulting></SupportConsulting>}
        ></Route>
        <Route
          path="cloud-solutions"
          element={<CloudSolutions></CloudSolutions>}
        ></Route>
        <Route
          path="disaster-recovery"
          element={<FinancialServices></FinancialServices>}
        ></Route>
        <Route
          path="cloud-desktop"
          element={<HealthCareStaffing></HealthCareStaffing>}
        ></Route>
        <Route
          path="network-solutions"
          element={<ConstructionStaffing></ConstructionStaffing>}
        ></Route>
        <Route
          path="managed-it-services"
          element={<EngineeringSupport></EngineeringSupport>}
        ></Route>
      </Route>
      <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
  </BrowserRouter>
);
