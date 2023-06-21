import React from 'react'
import { styled } from '../../../../../stitches.config'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'

const CardView = ({popularUser}) => {
    console.log("popular user", popularUser)
    const {login,id,followers,project,avatar_url,description,stars} = popularUser;
    console.log("Avatar url", avatar_url)

    const Box = styled('div',{
        display: "flex",
        width:"320px",
        height:"320px",
        flexWrap: "wrap",
        // justifyContent: 'space-between'
        // gap: "$2"
      
      })

  return (
    <Box>
        <div style={{width:'320px', backgroundColor: 'green'}}>
        <CardHeader image={avatar_url} />
        <CardBody/>
        <CardFooter/>
        </div>
    {/* <span>Name:  {name}</span>
    <span>Id:  {id}</span>
    <span>Followers:   {followers}</span>
    <span>Project:   {project}</span>
    <span>Image:   {image}</span>
    <span>Description:   {description}</span>
    <span>Stars:   {stars}</span> */}
  </Box>
  )
}

export default CardView