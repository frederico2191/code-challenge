import React from 'react'
import { styled } from '../../../../../../stitches.config'

const Box = styled('div',{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    zIndex:11,
    marginTop:'$3',
    // textDecoration:'none',
    // a:-webkit-any-link {
    //   color: -webkit-link;
    //   cursor: pointer;
    //   text-decoration: underline;
    // borderRadius:'0 0 6px 6px',
})
const ProfileButton = styled('button',{
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
    // textDecoration:'none !important',
})

const hrefNoDecoration = styled('a',{
  textDecoration:'none',

})

const HoveredCardFooter = ({user}) => {
    const {html_url} = user;
    // const handleClick = () => console.log("html_url",html_url)
    
  return (
    <Box>
          <a href={html_url} target="_blank" rel="noopener noreferrer" ><ProfileButton> Open Profile
        </ProfileButton>
        </a>
    </Box>
  )
}

export default HoveredCardFooter