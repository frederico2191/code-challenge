import React, { useEffect, useState } from 'react'
import { styled } from '../../../../../stitches.config'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import { getUserTopRatedRepo } from '../../../../../api'

const Box = styled('div',{
    $$shadow: '$colors$greyLineBody',
    width:"320px",
    height:"320px",
    borderRadius:'6px',
    boxShadow: "2px 5px 3px 0px $$shadow",
    webkitBoxShadow: "5px 9px 10px 0px $blueNavyNavbar",
    mozBoxShadow: "5px 9px 10px 0px $blueNavyNavbar"
    
  })

const CardView = ({user, repo}) => {
  const {avatar_url} = user;
  return <Box>
            <CardHeader image={avatar_url} />
            <CardBody color="white" user={user}/>
            <CardFooter repo={repo}/>
    </Box>
}

export default CardView