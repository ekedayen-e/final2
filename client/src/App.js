import Book from './components/Book'
import React from 'react'
import './App.css';
import Layout from './pages/Layout'
import Find from './pages/Find'
import Home from './pages/Home'
import Add from './pages/Add'
import Delete from './pages/Delete'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

const StyledContainer = styled.section
`
background-color:grey;
width: 100vw;
height: 100vh;
margin: 0px;
position: absolute;
top: 0px;
right: 0px;
bottom:0px;
left: 0px;
`;

function App() {
  return (
    <StyledContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="find"element={<Find />} />
          <Route path="del"element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </StyledContainer>
  );
}

export default App;
