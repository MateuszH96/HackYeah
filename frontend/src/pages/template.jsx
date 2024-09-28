import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import exampleImage from '../assets/logo.jpeg'
function Template({ children }) {
  const navigate = useNavigate();

  const handleClickLink = (page) => {
    navigate(page);
  };

  return (
    <div>
      <nav id="nav-links">
        <div className="logo">
          <img src = {exampleImage} alt="logo"/>
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
        <a className="nav-link" onClick={() => handleClickLink("/create_event")}>
          Zaloguj
        </a>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
}

export default Template;
