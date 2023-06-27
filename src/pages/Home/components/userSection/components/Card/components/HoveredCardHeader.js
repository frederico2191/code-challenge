import React from 'react'
import { styled } from '../../../../../../../stitches.config'

const AvatarImageBox = styled('img',{
    height: '56px',
    borderRadius:'9999px',
    width:'56px',
    position: 'absolute',
    zIndex: 11,
    top:'26px'
})

const Box = styled('div',{
    height:'82px',
    backgroundColor: '$whiteCard',
    display: 'flex',
    justifyContent:'center',
    alignItems:'start',
})
  
  const ImagesBox = styled('div',{
    height: '76px',
    objectFit: 'cover',
    width: '320px',
    display: 'flex',
    justifyContent:'center',
    position: 'relative'
})  

const HoveredCardHeader = ({image}) => (
  <Box>
    <ImagesBox>
      <AvatarImageBox src={image} alt="avatar-image"/>
    </ImagesBox>
  </Box>
)

export default HoveredCardHeader