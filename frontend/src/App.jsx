import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/template";
import Home from "./pages/home";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Template children={<Home/>} />} />
        <Route path="/events" element={<Template children={<Events/>} />} />
        <Route path="/create_event" element={<Template children={<CreateEvent/>} />} />
        <Route path="/create_event" element={<Template children={<CreateEvent/>} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;