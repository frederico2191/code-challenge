import React, { useEffect, useState } from 'react'
import { styled } from '../../../../../../../stitches.config'
import { getUserTopRatedRepo } from '../../../../../../../api'
import RepoStars from '../../../../../../../components/RepoStars';




const BoxWrapper= styled('div',{
    height:'68px',
    border:'solid',
    borderColor: '$blueNavyBody',
    borderRadius: '6px',
    borderLeftWidth: '6px',
    width: '208px'


})

const UpperBox = styled('div',{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'start',
    // marginTop: '$1',
    alignItems: 'center',
    padding: '7px 10px',

})

const RepoName = styled('div',{
    color:'$blueNavyBody',
    maxWidth: '145px',
    fontSize:'15px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight:'auto'
})
const LowerBox = styled('div',{
    color: '$blueTextBody',
    padding: '7px 10px 3px 10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize:'12px'
})

// const RepoTotalStars = styled('div',{
//     color:'$blueNavyBody',
//     display:'flex',
//     alignItems: 'center',
//     fontSize: 'large',
//     justifyContent:'space-between',
//     marginLeft:'auto',
// })

// const StarIcon = styled('div',{
//     marginRight: '2px',
//     display: 'flex',
//     justifyContent:'center',


// })
// const StarsCount = styled('div',{
// })



const MiniRepoCardView = ({repo}) => {
    const noDescription = 'No description added'
    const noRepoName = 'No name added'
 
  return (
    <BoxWrapper>
        <UpperBox>
            <RepoName data-testid="repo-name">{repo?.name || noRepoName}</RepoName>
            <RepoStars data-testid="repo-stars" starsCount={repo?.stargazers_count || 0}/>
        </UpperBox>
        <LowerBox data-testid="repo-description" > {repo?.description || noDescription}</LowerBox>
    </BoxWrapper>
  )
}

export default MiniRepoCardView