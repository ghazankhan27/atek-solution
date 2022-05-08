import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App m-0 p-0">
      <div className="relative z-50">
        <NavBar></NavBar>
      </div>
      <div className="mt-24 md:mt-36 relative z-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
