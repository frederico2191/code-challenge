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



const MiniRepoCardView = ({user}) => {
    const {login} = user;
    const [repoName, setRepoName] = useState('')
    const [repoDescription, setRepoDescription] = useState('')
    const [starsCount, setStarsCount] = useState('')
    const noDescription = 'No description added'
    const noRepoName = 'No name added'
  
    useEffect(() => {
      (async () => {
        console.log("TTTTTT%%%%%%%%%%%%%%%%%%%%%%%%%%%",login)
        const topRatedRepo  = await getUserTopRatedRepo({ username:login });
        setRepoName(topRatedRepo.items[0]?.name)
        setRepoDescription(topRatedRepo.items[0]?.description)
        setStarsCount(topRatedRepo.items[0]?.stargazers_count)
      })()
    }, [login])

  return (
    <BoxWrapper>
        <UpperBox>
            <RepoName>{repoName || noRepoName}</RepoName>
            <RepoStars starsCount={starsCount}/>
            {/* <RepoTotalStars> 
                <StarIcon>
                    <MdStars/>
                </StarIcon>
                <StarsCount>
                    {StarsCount}
                </StarsCount>
            </RepoTotalStars> */}
        </UpperBox>
        <LowerBox>{repoDescription || noDescription}</LowerBox>
    </BoxWrapper>
  )
}

export default MiniRepoCardView