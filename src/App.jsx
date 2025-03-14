import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Botones from './pages/pruebaComponente/Botones'
import Modales from './pages/pruebaComponente/Modales'
import Login from './pages/login/Login'
import Grupos from './pages/grupos/Grupos'
import Layout from './layouts/Layout'
import VerGrupo from './pages/grupos/VerGrupo'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/botones' element={<Botones />} />
        <Route path='/modales' element={<Modales />} />
        <Route path='/pruebas' element={<Index />} />
        <Route element={<Layout />}>
          <Route path='/grupos' element={<Grupos />} />
          <Route path='/grupo' element={<VerGrupo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
