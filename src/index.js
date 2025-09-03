import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Arts from './Pages/Arts';
import Projects from './Pages/Projects';
import Navigation from "./Layout/Navigation";
import Woop from "./Pages/Woop";
import Ims from "./Pages/Ims";
import Tuwayan from "./Pages/Tuwayan";
import BrickBreaker from "./Pages/BrickBreaker";
import Test from "./Pages/Test";
import About from "./Pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<About />} />
          <Route path="arts" element={<Arts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/woop" element={<Woop />} />
          <Route path="projects/ims" element={<Ims />} />
          <Route path="projects/tuwayan" element={<Tuwayan />} />
          <Route path="projects/brickbreaker" element={<BrickBreaker />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);