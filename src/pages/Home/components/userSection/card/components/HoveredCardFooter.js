import React from 'react'
import { styled } from '../../../../../../stitches.config'

const Box = styled('div',{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    zIndex:11,
    marginTop:'$3',
    // borderRadius:'0 0 6px 6px',
})
const ProfileButton = styled('div',{
    width: '115px',
    height:'46px',
    border:'solid',
    color:'$greyLineBody',
    borderRadius:'40px',
    borderWidth:'1px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 12
})

const HoveredCardFooter = ({user}) => {
    console.log("user hovered Footer", user)
  return (
    <Box>
        <ProfileButton>Open Profile</ProfileButton>
    </Box>
  )
}

export default HoveredCardFooter