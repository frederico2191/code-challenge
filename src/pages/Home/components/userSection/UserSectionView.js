import React from 'react'
import Card from './Card'
import { styled } from '../../../../stitches.config'

const UserSectionView = ({title, users}) => {
  console.log("USERS SECTION VIEW",users)
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

  const Title = styled('h3',{
    color:'$blueTextBody'
  })
  

  return (<BoxWrapper>
    <Title>{title}</Title>
    <Box>
    {users?.map((user) => (
        <Card key={user.id} user={user}/>
    ))}
    </Box>
    </BoxWrapper>
  )
}

export default UserSectionView