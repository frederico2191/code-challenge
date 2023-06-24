import React from 'react'
import { styled } from '../../../../../stitches.config'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'

const Box = styled('div',{
    $$shadow: '$colors$greyLineBody',
    width:"320px",
    height:"320px",
    borderRadius:'6px',
    boxShadow: "2px 5px 3px 0px $$shadow",
    webkitBoxShadow: "5px 9px 10px 0px $blueNavyNavbar",
    mozBoxShadow: "5px 9px 10px 0px $blueNavyNavbar"
    
  })

const CardView = ({user}) => {
  const {login,id,followers,project,avatar_url,description,stars} = user;

  return <Box>
            <CardHeader image={avatar_url} />
            <CardBody color="white" user={user}/>
            <CardFooter user={user}/>
    </Box>
}

export default CardView