import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/template";
import Home from "./pages/home";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";
import LoginRegister from "./pages/LoginRegister";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Template>
              <Home />
            </Template>
          }
        />
        <Route
          path="/events"
          element={
            <Template>
              <Events />
            </Template>
          }
        />
        <Route
          path="/create_event"
          element={
            <Template>
              <CreateEvent />
            </Template>
          }
        />
        <Route
          path="/login_register"
          element={
            <Template>
              <LoginRegister />
            </Template>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
