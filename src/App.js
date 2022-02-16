import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Random from "./screens/Random";
import Trending from "./screens/Trending";
import Search from "./screens/Search";
import NoMatch from "./screens/NoMatch";

function App() {
  return (
    <div className="App">
      <div className="links">
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/trending"}>Trending</NavLink>
          <NavLink to={"/random"}>Random</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
