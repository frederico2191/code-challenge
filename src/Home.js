import React from 'react'
import logo from "./images/logo.svg"

function Home() {
    
  return (
    <div
    style={{
      backgroundColor: 'blue',
      width: '100px',
      height: '100px'
    }}
  ><img src={logo} alt="logo"/></div>
  )
}

export default Home