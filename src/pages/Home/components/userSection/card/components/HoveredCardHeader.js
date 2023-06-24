import React from 'react'
import { styled } from '../../../../../../stitches.config'


const AvatarImageBox = styled('img',{
    height: '56px',
    borderRadius:'9999px',
    width:'56px',
    position: 'absolute',
    zIndex: 11,
    // bottom:'-26px'
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
    // alignItems:'end'
    // borderRadius: '6px 6px',
    // webkitBorderRadius: '6px 6px',
    // mozBorderRadius: '6px 6px'
    // backgroundColor: '$purple400',
  
  })
  

const HoveredCardHeader = ({image}) => {


  return (<Box>
        <ImagesBox>
            <AvatarImageBox src={image} alt="Avatar Image"/>
        </ImagesBox>
    </Box>
  )
}

export default HoveredCardHeader