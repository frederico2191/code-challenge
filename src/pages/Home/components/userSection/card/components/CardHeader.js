import React from 'react'
import { styled } from '../../../../../../stitches.config'
// import AvatarImageBox from './AvatarImageBox'


const Box = styled('div',{
  height:'98px',
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
  height: '76px',
  width: '320px',
  backgroundColor: "$blueNavyNavbar",
  opacity: '50%',
  position: 'absolute',
  zIndex: 10,
  borderRadius: '6px 6px 0 0'
})

const CoverImage = styled("img", {
  height: '76px',
  objectFit: 'cover',
  width: '320px',
  position: 'absolute',
  borderRadius: '6px 6px 0 0'
  // borderRadius: '10px',
   
})

const AvatarImageBox = styled('img',{
  height: '72px',
  borderRadius:'9999px',
  width:'72px',
  position: 'absolute',
  zIndex: 20,
  // bottom:'-26px'
  top:'26px'
})

const CardHeader = ({image}) => {
  return (
    <Box>
      <ImagesBox>
        <AvatarImageBox src={image} alt="AvatarImage"/>
        <CoverImageBoxWrapper>
          <CoverImageBox>
            <CoverImageOverlay />
            <CoverImage src={image} alt="CoverImage"/>
          </CoverImageBox>
        </CoverImageBoxWrapper>
      </ImagesBox>
    </Box>
  )
}

export default CardHeader