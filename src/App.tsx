
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Projects from './projects/Projects';
import PongWars from './PongWars';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/pong" element={<PongWars />} />
      </Routes>
    </>
  )
}

export default App
