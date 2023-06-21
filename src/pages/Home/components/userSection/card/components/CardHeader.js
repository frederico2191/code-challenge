import React from 'react'
import { styled } from '../../../../../../stitches.config'


const Box = styled('div',{
  // height:'98px',
  backgroundColor: '$whiteCard',
  display: 'flex',
  justifyContent:'center',
  alignItems:'end'

})

const CoverImageBox = styled('div',{
  height: '76px',
  objectFit: 'cover',
  width: '320px'
  // backgroundColor: '$purple400',

})

const CoverImage = styled("img", {
  height: '76px',
  objectFit: 'cover',
  width: '320px'
})

const AvatarImageBox = styled('img',{
  height: '72px',
  borderRadius:'9999px',
  width:'72px',
})

const CardHeader = ({image}) => {
  return (
    <Box>
      <CoverImageBox>
        <CoverImage src={image} alt="CoverImage"/>
        <AvatarImageBox src={image} alt="AvatarImage"/>
      </CoverImageBox>
    </Box>
  )
}

export default CardHeader