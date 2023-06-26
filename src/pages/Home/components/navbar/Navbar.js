import React from 'react'
import { styled } from '../../../../stitches.config'
import Logo from './Logo'
import Search from './Search'

const Bar = styled("div",{
  backgroundColor: '$blueNavyNavbar',
  display: "flex",
  justifyContent:"space-around",
  // width:'calc(100%)',
  // px: '30px',
  height:"64px",
  paddingLeft:"$2",
  paddingRight: "$2"
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