import React from 'react'
import { styled } from '../../../../../stitches.config';
import RepoStars from '../../../../../components/RepoStars';

const RepoName = styled('div',{
    color:'$blueTextBody',
    fontWeight: 'bold',
    marginTop: '48px',
    marginBottom:'$3',
    textAlign: 'center',
    padding: '0 5px',
    maxWidth: '232px'
})

const RepoDescription = styled('div',{
    marginTop:'$4',
    color: '$blueTextBody',
    height: '65px',
    maxWidth: '145px',
    fontSize:'$13',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
})

const Box = styled('div', {
    $$shadow: '$colors$greyLineBody',
    minWidth:"232px",
    height:"232px",
    borderRadius:'6px',
    boxShadow: "2px 5px 3px 0px $$shadow",
    border:'solid',
    borderColor: 1,
    borderWidth: '6px 0 0 0',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '$whiteCard'
  })

const noDescription = 'No description added'
const variants = ['$blueNavyBody','$blueSkyBody','$blueLightBody','$blueLightestBody']

const borderColor = (index) => variants[index]

const RepoCard = ({ repo, index }) => {
  const { name, description, stargazers_count } = repo;
  return (
    <Box css={{ borderColor: borderColor(index) }}>
      <RepoName>{name}</RepoName>
      <RepoStars starsCount={stargazers_count}/>
      <RepoDescription>{description || noDescription}</RepoDescription>
    </Box>
  )
}

export default RepoCard