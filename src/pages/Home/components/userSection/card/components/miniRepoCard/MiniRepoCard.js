import React from 'react'
import { styled } from '../../../../../../../stitches.config'
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

const noDescription = 'No description added'
const noRepoName = 'No name added'

const MiniRepoCard = ({repo}) => (
    <BoxWrapper data-testid="mini-repo-card">
        <UpperBox>
            <RepoName data-testid="repo-name">{repo?.name || noRepoName}</RepoName>
            <RepoStars starsCount={repo?.stargazers_count || 0}/>
        </UpperBox>
        <LowerBox data-testid="repo-description" > {repo?.description || noDescription}</LowerBox>
    </BoxWrapper>
)

export default MiniRepoCard