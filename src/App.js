import "./App.css";

import Login from "./Pages/login";
import Homepage from "./Pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RothIra from "./Pages/rothIra";
import SideNav from "./components/SideNavBar/SideNav";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/rothIra" element={<RothIra />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
