import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
function Template({ children }) {
  const navigate = useNavigate();

  const handleClickLink = (page) => {
    navigate(page);
  };

  return (
    <div>
      <nav id="nav-links">
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
        <a className="nav-link" onClick={() => handleClickLink("/challenges")}>
          Challenges
        </a>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
}

export default Template;
