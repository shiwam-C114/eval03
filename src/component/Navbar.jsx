import React from 'react'
import styledComponents from 'styled-components'


const Span = styledComponents.span`
    margin: 10px;
    padding: 10px;
`

function Navbar() {
  return (
    <>
    <a href="/">home</a>
    <Span></Span>
    <a href="/products">products</a>
    <Span></Span>
    <a href="/login">login</a>
    <Span></Span>
    <a href="/register">register</a>
    <Span></Span>
    <button>logout</button>
    </>
  )
}

export default Navbar