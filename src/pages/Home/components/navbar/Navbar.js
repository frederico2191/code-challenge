import React from 'react'
import { styled } from '../../../../stitches.config'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {

  const Bar = styled("div",{
    backgroundColor: '$blueNavbar', 
    display: "flex",
    justifyContent:"space-around",
    width:'calc(100%)',
    height:"64px",
    paddingLeft:"$2",
    paddingRight: "$1"
  })

  return (
    <Bar>
      <Logo/>
      <Search/>
    </Bar>
  )
}

export default Navbar