import React from 'react'
import { styled } from '../../../../../../stitches.config'
import MiniRepoCard from './miniRepoCard'


const BoxWrapper = styled('div',{
  display: 'flex',
  justifyContent:'center',
  backgroundColor: '$whiteCard',
  // borderRadius:'0 0 6px 6px',
  height:'115px',
})


const Box = styled('div',{
  borderStyle: 'solid',
  borderColor: '$greyLineBody',
  borderWidth: '1px 0 0 0',
  // backgroundColor: '$whiteCard',
  width: '208px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const CardFooter = ({user}) => {


  return (
    <BoxWrapper>
      <Box>
        <MiniRepoCard user={user}/>
      </Box>
    </BoxWrapper>


  )
}

export default CardFooter