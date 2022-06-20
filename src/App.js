import "./App.css";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Forgot from "./Components/ForgotPassword";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<Forgot />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
