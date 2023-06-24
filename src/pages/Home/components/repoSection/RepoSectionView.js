import React from 'react'
import { styled } from '../../../../stitches.config'
import RepoCard from './RepoCard.js'


const RepoSectionView = ({title, repos}) => {
  

  const BoxWrapper = styled('div',{
    marginTop:'30px',
  })
  const Box = styled('div',{
    marginTop: '10px',
    width:'calc(100%)',
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
    {repos?.map((repo,index) => (
        <RepoCard key={repo.id} repo={repo} index={index}/>
    ))}
    </Box>
    </BoxWrapper>
  )
}


export default RepoSectionView