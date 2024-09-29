import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import exampleImage from "../assets/logo.jpeg";
import { AuthContext } from "./AuthProvider"; 

function Template({ children }) {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext); 
  const isAuthenticated = !!auth; 

  const handleClickLink = (page, status = false) => {
    if (page === "/create_event" && !isAuthenticated) {
      navigate("/login_register"); 
      return;
    }
    
    if (status && isAuthenticated) {
      logout(); 
    }
    navigate(page); 
  };

  return (
    <div>
      <nav id="nav-links">
        <div className="logo">
          <img src={exampleImage} alt="logo" />
        </div>
        <a className="nav-link" onClick={() => handleClickLink("/")}>
          Home
        </a>
        <a className="nav-link" onClick={() => handleClickLink("/events")}>
          Wydarzenia
        </a>
        <a className="nav-link" onClick={() => handleClickLink("/create_event")}>
          Stwórz wydarzenie
        </a>
        <a
          className="nav-link"
          onClick={() => handleClickLink("/login_register", true)}
        >
          {isAuthenticated ? "Wyloguj" : "Zaloguj"}
        </a>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
}

export default Template;
