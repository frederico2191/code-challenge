import React from 'react'
import Card from './card'
import { styled } from '../../../../stitches.config'

const UserSectionView = ({title, topPopularUsers}) => {
  const BoxWrapper = styled('div',{
    marginTop:'30px',
  })
  const Box = styled('div',{
    marginTop: '10px',
    width:'calc(100%)',
    // backgroundColor: "blue",
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  })
  

  return (<BoxWrapper>
    <div>{title}</div>
    <Box>
    {topPopularUsers?.map((popularUser) => (
        <Card key={popularUser.id} popularUser={popularUser}/>
    ))}
    </Box>
    </BoxWrapper>
  )
}

export default UserSectionView