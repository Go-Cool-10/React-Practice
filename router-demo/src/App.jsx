import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./NavBar/Home";
import Services from "./NavBar/Services";
import AboutUs from "./NavBar/AboutUs";
import Login from "./NavBar/Login";
import LogOut from "./NavBar/LogOut";
import Products from "./NavBar/Products";
import ProductID from "./NavBar/ProductID";
import LayOut from "./NavBar/LayOut";

function App() {
  let services = ["Service A", "Service B", "Service C"];
  let [user, setUser] = useState(null);
  const handleLogin = (user) => {
    console.log(user);
    setUser(user);
    console.log(user);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut user={user}></LayOut>}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/services"
              element={<Services services={services} />}
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/logout"
              element={<LogOut handleLogout={handleLogout} />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productid" element={<ProductID />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
