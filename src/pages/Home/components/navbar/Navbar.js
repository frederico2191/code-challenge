import React from 'react'
import { styled } from '../../../../stitches.config'
import Logo from './Logo'
import Search from './Search'

const Navbar = ({searched}) => {

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

  // const Box = styled('div',{
  //   maxWidth:"1600px",
  //   paddingLeft:"$2",
  //   paddingRight: "$2",
  //   minWidth:'800px'
  // })

  return (
    <Bar>
      <Logo/>
      <Search searched={searched}/>
    </Bar>
  )
}

export default Navbar