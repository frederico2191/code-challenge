import React from 'react'
import Card from './card'
import { styled } from '../../../../stitches.config'

const UserSectionView = () => {
  const Box = styled('div',{
    width:'calc(100%)',
    backgroundColor: "blue"
  })
  return (
    <Box>
      <Card/>
    </Box>
  )
}

export default UserSectionView