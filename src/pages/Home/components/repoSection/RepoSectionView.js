import React from 'react'
import { styled } from '../../../../stitches.config'
import RepoCard from './RepoCard.js'

const BoxWrapper = styled('div',{
  marginTop:'3.5rem',
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

const RepoSectionView = ({title, repos, error}) => !error && (
  <BoxWrapper>
    <Title>{title}</Title>
    <Box>
      {repos?.map((repo,index) => <RepoCard key={repo.id} repo={repo} index={index}/>)}
    </Box>
  </BoxWrapper>
)


export default RepoSectionView