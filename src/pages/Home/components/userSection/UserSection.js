import React from 'react'
import Card from './components/Card'
import { styled } from '../../../../stitches.config'

const BoxWrapper = styled('div',{
  minHeight: '380px',
  maxWidth: '100vw',
  margin: 'auto',
  marginTop:'3.5rem',
})

const Box = styled('div',{
  marginTop: '10px',
  maxWidth: '100vw',
  minHeight:'330px',
  gap: '10px',
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  margin: '0 auto',
  overflowX: 'scroll',
  padding: '$1'
})

const Title = styled('h3',{
  color:'$blueTextBody',
  marginBottom: '2rem',
})

const UserSection = ({ title, users, error }) => (
  <BoxWrapper>
    <Title data-testid="section-title">{title}</Title>
    <Box>
      {Array.isArray(users) && users.map((user) => (
        <Card key={user.id} user={user} error={error}/>
      ))}
    </Box>
  </BoxWrapper>
)

export default UserSection