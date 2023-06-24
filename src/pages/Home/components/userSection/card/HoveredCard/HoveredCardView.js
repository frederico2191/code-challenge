import React from 'react'
import CardBody from '../components/CardBody'
import HoveredCardHeader from '../components/HoveredCardHeader'
import HoveredCardFooter from '../components/HoveredCardFooter'
import { styled } from '../../../../../../stitches.config'



const Box = styled('div',{
  width:"320px",
  height:"320px",
  borderRadius:'6px',
  display: 'flex',
  backgroundColor: 'Red',
  flexDirection:'column',
  justifyContent: 'start'
  
})

const CoverImageBox = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

const CoverImageBoxWrapper = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%'
})

const CoverImageOverlay = styled('div', {
  height: '320px',
  width: '320px',
  backgroundColor: "$blueNavyNavbar",
  opacity: '75%',
  position: 'absolute',
  zIndex: 10,
  borderRadius: '6px',
  // linearGradient: '360deg,#ff0000 0%, #00ff00 80%)'
})

const CoverImage = styled("img", {
  height: '320x',
  objectFit: 'cover',
  width: '320px',
  position: 'absolute',
  borderRadius: '6px'
  // borderRadius: '10px',
   
})
const HoveredCardView = ({user}) => {
    console.log("popular user", user)
    const {login,id,followers,project,avatar_url,description,stars} = user;
    console.log("Avatar url", avatar_url)

  
  return (
    <Box>
       <CoverImageBoxWrapper>
          <CoverImageBox>
            <CoverImageOverlay />
            <CoverImage src={avatar_url} alt="CoverImage"/>
          </CoverImageBox>
        </CoverImageBoxWrapper>
            <HoveredCardHeader image={avatar_url} />
            <CardBody color="transparent" user={user}/>
            <HoveredCardFooter user={user}/>
    </Box>
  )
}

export default HoveredCardView