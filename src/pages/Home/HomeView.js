import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import UserSection from './components/UserSection'
import RepoSection from './components/RepoSection'

import { styled } from '../../stitches.config';

const FlexBox = styled('div',{
  width: 'calc(100%)',
  height:'calc(100%)',
  minHeight: '100vh',
  paddingBottom: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  backgroundColor:'$whiteBackground'
})

const Box = styled('div',{
  maxWidth:"1200px",
  width:"1050px",
})

const ErrorComponent = styled("div", {
  marginTop: '5rem',
  textAlign: 'center',
})

const firstSectionTitle = "Trending Users"
const secondSectionTitle = "Most Active Users"
const thirdSectionTitle = "Top Repositories"

const HomeView = ({searched,topRepositories, topActiveUsers, topPopularUsers, error}) => (
  <>
    <Navbar searched={searched}/>
    <FlexBox>
      <Box> {error ? <ErrorComponent>An error has occured. Please try again.</ErrorComponent> : (
        <>
          <UserSection title={firstSectionTitle} users={topPopularUsers} error={error}/>
          <UserSection title={secondSectionTitle} users={topActiveUsers} error={error}/> 
          <RepoSection title={thirdSectionTitle} repos={topRepositories} />
        </>
      )}
      </Box>
    </FlexBox>
  </>
)

export default HomeView