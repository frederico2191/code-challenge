import React from 'react'
import { styled } from '../../../../../../stitches.config';
import RepoStars from '../../../../../../components/RepoStars';

const RepoName = styled('div',{
    color:'$blueTextBody',
    fontWeight: 'bold',
    marginTop: '48px',
    marginBottom:'20px',
    textAlign: 'center',
    padding: '0 $1'
})

const RepoDescription = styled('div',{
    marginTop:'$3',
    color: '$blueTextBody',
    height: '60px',
    maxWidth: '145px',
    fontSize:'13px',
    // display:'inline-block',
    // display: "-webkit-box",
    // -webkit-line-clamp: 4;
    // -webkit-box-orient: vertical;
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
})

const Box = styled('div', {
    $$shadow: '$colors$greyLineBody',
    width:"232px",
    height:"232px",
    borderRadius:'6px',
    boxShadow: "2px 5px 3px 0px $$shadow",
    border:'solid',
    // borderColor: {variants[index]},
    borderColor: 1,
    borderWidth: '6px 0 0 0',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    // webkitBoxShadow: "5px 9px 10px 0px $blueNavyNavbar",
    // mozBoxShadow: "5px 9px 10px 0px $blueNavyNavbar"
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