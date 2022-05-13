import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ContactUs from "./components/homepage/ContactUs";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
