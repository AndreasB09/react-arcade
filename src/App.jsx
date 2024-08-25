import './App.css';
import Home from "./pages/Home/Home.jsx";
import Games from "./pages/Games/Games.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App;
