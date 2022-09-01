import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Login from "./Component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Modifydetails from "./Component/Modifydetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Modifydetails" element={<Modifydetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
