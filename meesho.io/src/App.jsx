import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TechAtMeesho from "./components/TechAtMeesho";
import LifeAtMeesho from "./components/LifeAtMeesho";
import Blog from "./components/Blog";
import Newsroom from "./components/Newsroom";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tech-at-meesho" element={<TechAtMeesho />} />
      <Route path="/life-at-meesho" element={<LifeAtMeesho />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/newsroom" element={<Newsroom />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default App;
