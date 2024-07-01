import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DoubleDiamond from "./pages/DoubleDiamond.jsx";
import Personas from "./pages/Personas.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/double-diamond" element={<DoubleDiamond />} />
        <Route path="/personas" element={<Personas />} />
      </Routes>
    </Router>
  );
}

export default App;