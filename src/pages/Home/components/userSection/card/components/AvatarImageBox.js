import React from 'react'
import { styled } from '../../../../../../stitches.config'

const AvatarImageBox = ({image}) => {
    const AvatarImageBox = styled('img',{
        height: '72px',
        borderRadius:'9999px',
        width:'72px',
        position: 'absolute',
        zIndex: 20,
        top:'26px'
      })
  return (
    <AvatarImageBox>{image}</AvatarImageBox>
  )
}

export default AvatarImageBox