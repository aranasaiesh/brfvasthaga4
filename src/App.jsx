import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PerformedPlans from "./pages/PerformedPlans";
import Stadgar from "./pages/Stadgar";
import Plans from "./pages/Plans";
import Felanmälan from "./pages/Felanmälan";
import Board from "./pages/Board";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import StyrelseInfo from "./pages/StyrelseInfo";
import Regler from "./pages/Regler";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Stadgar" element={<Stadgar />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/PerformedPlans" element={<PerformedPlans />} />
          <Route path="/Regler" element={<Regler />} />
          <Route path="/StyrelseInfo" element={<StyrelseInfo />} />
          <Route path="/Felanmälan" element={<Felanmälan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
