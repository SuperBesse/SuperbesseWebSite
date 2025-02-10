
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu'
import Home from './Home'
import Projects from './projects/Projects';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
