
import React from 'react'
import { styled } from '../../../../../stitches.config'
import LogoIcon from './LogoIcon'

const LogoWrapper = styled("div",{
  width:'160px',
  height:"64px",
  color:"White",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  fontWeight:"bolder",
  fontSize:"600",
})

const LogoIconWrapper = styled('div',{
  marginRight: "10px"
})

const Logo = () => {
  return <LogoWrapper>
    <LogoIconWrapper>
      <LogoIcon/>
    </LogoIconWrapper>
    <span>UPHILL</span>
  </LogoWrapper>
}

export default Logo