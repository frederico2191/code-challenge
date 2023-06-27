import React from 'react'
import { styled } from '../../../../../../stitches.config'

const Box = styled('img',{
    height: '72px',
    borderRadius:'9999px',
    width:'72px',
    position: 'absolute',
    zIndex: 20,
    top:'26px'
  })

const AvatarImageBox = ({ image }) => <Box>{image}</Box>

export default AvatarImageBox