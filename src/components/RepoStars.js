
import React from 'react'
import { styled } from '../stitches.config'
import { MdStars } from 'react-icons/md';

const Box = styled('div',{
  color:'$blueNavyBody',
  display:'flex',
  alignItems: 'center',
  fontSize: 'large',
  justifyContent:'space-between',
})

const StarIcon = styled('div',{
  marginRight: '2px',
  display: 'flex',
  justifyContent:'center',
})

const StarsCount = styled('div',{
})

const RepoStars = ({ starsCount }) => (
  <Box data-testid="repo-stars">
      <StarIcon><MdStars/></StarIcon>
      <StarsCount>{starsCount}</StarsCount>
  </Box>
)

export default RepoStars