import React from 'react'
import Book from "../components/Book"
import  {Helmet} from 'react-helmet'
import styled from "styled-components"

const StyledContainer = styled.section
`
  font-family: Tahoma;

`;

function Add() {
  return (
    <StyledContainer>
    <Helmet>
    <title>Find</title>
    </Helmet>
    <h1>Add Entry</h1>
    <p>Enter your information below.</p>
    <br />
    <Book />
    </StyledContainer>
  )
}

export default Add