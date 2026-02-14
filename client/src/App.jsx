import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Home";
import Workspace from './pages/Workspace';
import WorkspaceNormal from './pages/WorkspaceDynamic';
const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/workspace-dynamic" element={<WorkspaceNormal/>} />
        
      </Routes>
    </div>
  )
}

export default App
