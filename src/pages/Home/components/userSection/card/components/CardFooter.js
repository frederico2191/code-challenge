import React from 'react'
import { styled } from '../../../../../../stitches.config'
import MiniRepoCard from './MiniRepoCard'


const BoxWrapper = styled('div',{
  display: 'flex',
  justifyContent:'center',
  backgroundColor: '$whiteCard',
  height:'115px',
})


const Box = styled('div',{
  borderStyle: 'solid',
  borderColor: '$greyLineBody',
  borderWidth: '1px 0 0 0',
  width: '208px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const CardFooter = ({repo}) => {


  return (
    <BoxWrapper>
      <Box>
        <MiniRepoCard repo={repo}/>
      </Box>
    </BoxWrapper>


  )
}

export default CardFooter