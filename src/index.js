import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Arts from './Pages/Art';
import Projects from './Pages/Projects';
import Navigation from "./Layout/Navigation";
import Woop from "./Pages/Woop";
import Ims from "./Pages/Ims";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="arts" element={<Arts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="view-project-woop" element={<Woop />} />
          <Route path="view-project-ims" element={<Ims />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);