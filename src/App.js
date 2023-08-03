import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';
import Arts from './Pages/Art';
import Projects from './Pages/Projects';
import { Routes, Route } from 'react-router-dom';
import Woop from './Pages/Woop';
import Ims from './Pages/Ims';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' to={<LandingPage />} />
        <Route path='/arts' to={<Arts />} />
        <Route path='/projects' to={<Projects />} />
        <Route path='/view-project-woop' to={<Woop />} />
        <Route path='/view-project-ims' to={<Ims />} />

      </Routes>
    </div>
  );
}

export default App;
