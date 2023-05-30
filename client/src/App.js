import Book from './components/Book'
import React from 'react'
import './App.css';
import Layout from './pages/Layout'
import Find from './pages/Find'
import Home from './pages/Home'
import Add from './pages/Add'
import Delete from './pages/Delete'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/find"element={<Find />} />
          <Route path="/del"element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
