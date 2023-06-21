import React from 'react'
import { styled } from '../../../../../stitches.config'

const CardView = ({popularUser}) => {
    const {name,id,followers,project,image,description,stars} = popularUser

    const Box = styled('div',{
        margin: "$2", 
        display: "flex",
        width:"300px",
        height:"100px",
        flexWrap: "wrap", 
        gap: "$2"
      
      })

  return (
    <Box>
    <span>Name:  {name}</span>
    <span>Id:  {id}</span>
    <span>Followers:   {followers}</span>
    <span>Project:   {project}</span>
    <span>Image:   {image}</span>
    <span>Description:   {description}</span>
    <span>Stars:   {stars}</span>
  </Box>
  )
}

export default CardView