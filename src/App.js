import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
