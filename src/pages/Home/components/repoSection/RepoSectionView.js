import React from 'react'
import { styled } from '../../../../stitches.config'
import RepoCard from './components/RepoCard'

const BoxWrapper = styled('div',{
  minHeight: '380px',
  maxWidth: '100vw',
  margin: 'auto',
  marginTop:'3.5rem',
})

const Box = styled('div',{
  maxWidth: '100vw',
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  margin: '0 auto',
  overflowX: 'scroll',
  gap: '10px',
  marginTop: '10px',
  padding: '5px'
})

const Title = styled('h3',{
  color:'$blueTextBody',
  marginBottom: '2rem'
})

const RepoSectionView = ({ title, repos }) => (
  <BoxWrapper>
    <Title>{title}</Title>
    <Box>
      {repos?.map((repo,index) => <RepoCard key={repo.id} repo={repo} index={index}/>)}
    </Box>
  </BoxWrapper>
)

export default RepoSectionView