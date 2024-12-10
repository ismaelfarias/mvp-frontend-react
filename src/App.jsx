import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aneis from "./pages/Aneis";
import Brincos from "./pages/Brincos";
import Colares from "./pages/Colares";

import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
    <Header />
    <Router>
      <nav className="nav-menu">
        <div>
          <a><Link to="/">NOVIDADES</Link></a>
          <a><Link to="/aneis">ANEIS</Link></a>
          <a><Link to="/brincos">BRINCOS</Link></a>
          <a><Link to="/colares">COLARES</Link></a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aneis" element={<Aneis />} />
        <Route path="/brincos" element={<Brincos />} />
        <Route path="/colares" element={<Colares />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
