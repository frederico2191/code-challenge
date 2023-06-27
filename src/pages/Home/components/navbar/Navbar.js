import React from 'react'
import { styled } from '../../../../stitches.config'
import Logo from './Logo'
import Search from './Search'

const Bar = styled("div",{
  backgroundColor: '$blueNavyNavbar',
  display: "flex",
  justifyContent:"space-around",
  height:"64px",
  paddingLeft:"$3",
  paddingRight: "$3"
})

const NavContainer = styled("div", {
  width:"1050px",
  display: "flex",
  justifyContent:"space-between",
})

const Navbar = ({ searched }) => (
  <Bar>
    <NavContainer>
      <Logo/>
      <Search searched={searched}/>
    </NavContainer>
  </Bar>
)

export default Navbar