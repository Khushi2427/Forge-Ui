import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Home";
import Workspace from './pages/Workspace';
const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/workspace" element={<Workspace />} />
        
      </Routes>
    </div>
  )
}

export default App
