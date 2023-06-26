import React from 'react'
import Card from './Card'
import { styled } from '../../../../stitches.config'

const BoxWrapper = styled('div',{
  marginTop:'3.5rem',
  minHeight: '380px'
})

const Box = styled('div',{
  marginTop: '10px',
  width:'calc(100%)',
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-between'
})

const Title = styled('h3',{
  color:'$blueTextBody',
  marginBottom: '2rem'
})

const UserSectionView = ({title, users, error}) => (
  <BoxWrapper>
    <Title>{title}</Title>
    <Box>
    {Array.isArray(users) && users.map((user) => (
        <Card key={user.id} user={user} error={error}/>
    ))}
    </Box>
  </BoxWrapper>
)

export default UserSectionView