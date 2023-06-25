import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import UserSection from './components/UserSection'
import RepoSection from './components/RepoSection'

import { styled } from '../../stitches.config';

const FlexBox = styled('div',{
  width: 'calc(100%)',
  height:'calc(100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'$whiteBackground'
})
const Box = styled('div',{
  maxWidth:"1200px",
  width:"1050px",
})


const HomeView = ({searched,topRepositories, topActiveUsers, topPopularUsers}) => {
  const firstSectionTitle = "Trending Users"
  const secondSectionTitle = "Most Active Users"
  const thirdSectionTitle = "Top Repositories"
  
    return (
      <>
      <Navbar searched={searched}/>
      <FlexBox>
        <Box>
            {/* <UserSection title={firstSectionTitle} users={topPopularUsers}/> */}
            {/* <UserSection title={secondSectionTitle} users={topActiveUsers}/>  */}
            <RepoSection title={thirdSectionTitle} repos={topRepositories} />
        </Box>
      </FlexBox>
    </>
    )
  }

export default HomeView