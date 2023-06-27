import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { styled } from '../../../../../../../stitches.config';

const Box = styled('div',{
    display: 'flex',
    alignContent: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
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
    marginLeft:'$1',
    fontWeight:'lighter'
})

const FollowersInfo = ({followers,color}) => (
  <Box>
    <FaRegUser/>
    <FollowersTotal data-testid="followers-number">{followers}<FollowersText>Followers</FollowersText></FollowersTotal>
  </Box>
)
export default FollowersInfo