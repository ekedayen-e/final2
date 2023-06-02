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

const SLink = styled(Link)
`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
} 
`;

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
          <SLink to="/"><Sa>Home</Sa></SLink>
        </Sli>
        <Sli>
        <SLink to="/add"><Sa>Add</Sa></SLink>
        </Sli>
        <Sli>
        <SLink to="/find"><Sa>Find</Sa></SLink>
        </Sli>
        <Sli>
        <SLink to="/del"><Sa>Delete</Sa></SLink>
        </Sli>
      </Sul>
    </nav>
  )
}

export default Navbar