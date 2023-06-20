
import React from 'react'
import { styled } from '../../../../stitches.config'
import LogoIcon from './LogoIcon'

const LogoWrapper = styled("div",{
    width:'160px',
    height:"64px",
    color:"White",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
    fontWeight:"bolder",
    fontSize:"600",
    justifyContent: "space-evenly",
    paddingLeft:"2rem"
  })

const Logotype = () => {
  return <LogoWrapper>
    <LogoIcon/>
    <span>UPHILL</span>
  </LogoWrapper>
}

export default Logotype