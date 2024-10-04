import React from 'react'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Create from './Create'
import Update from './Update'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Create" element={<Create />}></Route>
    <Route path="/edit/:id" element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
