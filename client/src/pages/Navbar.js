import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/find">Find</Link>
        </li>
        <li>
          <Link to="/del">Delete</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar