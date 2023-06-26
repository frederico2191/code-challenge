import React from 'react'
import { styled } from '../../../../../../../stitches.config'

const Box = styled('div',{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    zIndex:11,
    position: 'relative',
    marginTop:'$3',
    // textDecoration:'none',
    // a:-webkit-any-link {
    //   color: -webkit-link;
    //   cursor: pointer;
    //   text-decoration: underline;
    // borderRadius:'0 0 6px 6px',
})

const OpenProfileLink = styled('a',{
  textDecoration:'none',

  width: '115px',
  height:'46px',
  border:'solid',
  color:'$greyLineBody',
  borderRadius:'40px',
  borderWidth:'1px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  fontSize: 12,
  backgroundColor:'transparent',
  pointerEvents: 'all'
})

const HoveredCardFooter = ({user}) => {
  const { html_url } = user;

  return (
    <Box>
      <OpenProfileLink data-testid="profile-link" href={html_url} target="_blank" rel="noopener noreferrer" >Open Profile</OpenProfileLink>
    </Box>
  )
}

export default HoveredCardFooter