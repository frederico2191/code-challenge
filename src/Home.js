import React from 'react'
import Logo from "./images/Logo.svg"

import { styled } from './stitches.config';

const Box = styled('div',{
  margin: "$2", 
  display: "flex",
  flexWrap: "wrap", 
  gap: "$2"

})
const ButtonMe = styled('button', {
    backgroundColor: '$orangeDark',
    padding: '$1',
    borderRadius: 5
})

const Home = () => {
  return (
    <Box
    style={{
      width: '100px',
      height: '100px'
    }}
    >
    <Logo/>
  <ButtonMe>Click meee!</ButtonMe>
  </Box>
  )
}

export default Home