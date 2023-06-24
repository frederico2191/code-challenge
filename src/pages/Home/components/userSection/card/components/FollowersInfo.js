import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { styled } from '../../../../../../stitches.config';

const Box = styled('div',{
    display: 'flex',
    alignContent: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // color:'$blueNavyNavbar',
    color:'inherit',
})

const FollowersTotal = styled('div',{
    fontWeight:'bold',
    marginInline:'$1',
    fontSize:'small',
    display: 'flex',
    flexDirection:'row'
})
const FollowersText = styled('div',{
    fontSize:'small',
    color:'$greyTextBody',
    // color:'inherit',
    marginLeft:'$1',
    fontWeight:'lighter'
})


const FollowersInfo = ({followers,color}) => {
  
  return (
    <Box>
            <FaRegUser/>
            <FollowersTotal>{followers}<FollowersText>Followers</FollowersText></FollowersTotal>
    </Box>
  )
}
export default FollowersInfo