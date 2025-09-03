import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/Home';
import Arts from './Pages/Arts';
import Projects from './Components/Projects';
import { Routes, Route } from 'react-router-dom';
import Woop from './Pages/Woop';
import Ims from './Pages/Ims';
import Tuwayan from './Pages/Tuwayan';
import BrickBreaker from './Pages/BrickBreaker';
import Test from './Pages/Test';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' to={<LandingPage />} />
        <Route path='/arts' to={<Arts />} />
        <Route path='/projects' to={<Projects />} />
        <Route path='/projects/woop' to={<Woop />} />
        <Route path='/projects/ims' to={<Ims />} />
        <Route path='/projects/tuwayan' to={<Tuwayan />} />
        <Route path='/projects/brickbreaker' to={<BrickBreaker />} />
        <Route path='/test' to={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
