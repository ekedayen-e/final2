import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import styled from "styled-components"

const Sul = styled.ul
`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
}
`;

const Sli = styled.li
`
float: left;
`;

const Slink = styled.link

const Sa = styled.a
`
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
`;

function Navbar() {
  return (
    <nav>
      <Sul>
        <Sli>
          <Link to="/"><Sa>Home</Sa></Link>
        </Sli>
        <Sli>
        <Link to="/add"><Sa>Add</Sa></Link>
        </Sli>
        <Sli>
        <Link to="/find"><Sa>Find</Sa></Link>
        </Sli>
        <Sli>
        <Link to="/del"><Sa>Delete</Sa></Link>
        </Sli>
      </Sul>
    </nav>
  )
}

export default Navbar