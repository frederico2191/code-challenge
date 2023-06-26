import React from 'react'
import { styled } from '../../../../../../stitches.config'
import FollowersInfo from './FollowersInfo';

const Box = styled('div',{
    variants:{
        color:{
            white: {
                backgroundColor: '$whiteCard',
                color:'$blueTextBody',
            },
            transparent: {
                backgroundColor: 'transparent',
                color:'$greyLineBody',
                marginTop:'$2'
            }
        }
    },
    height:'106px',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'start',
    alignItems:'center',
    zIndex: 11
})

const UserName = styled('div',{
    // color:'$blueTextBody',
    fontWeight:'bold',
    marginTop:'19px',
    color:'inherit'
})

const Id = styled('div',{
    // color:'$blueTextBody',
    fontSize:'12px',
    marginTop:'11px',
    marginBottom:'12px',
    color:'inherit'
})




const CardBody = ({user,color}) => {
    const {login,name,followers} = user;
  return (
    <Box color={color}>
        <UserName data-testid="username">{login}</UserName>
        <Id data-testid="name">{name}</Id>
        <FollowersInfo color={color} followers={followers}/>
    </Box>
  )
}

export default CardBody