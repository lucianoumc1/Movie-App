import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
