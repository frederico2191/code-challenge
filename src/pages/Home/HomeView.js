import React from 'react'
import Navbar from './components/Navbar/Navbar';
import UserSection from './components/UserSection'
import RepoSection from './components/RepoSection'

import { styled } from '../../stitches.config';
import ErrorFeedback from './components/ErrorFeedback';

const FlexBox = styled('div',{
  width: '100%',
  height:'100%',
  minHeight: '100vh',
  paddingBottom: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  backgroundColor:'$whiteBackground'
})

const Box = styled('div',{
  maxWidth:"1200px",
  minWidth:"1050px",
  marginLeft:"20px"
})

const firstSectionTitle = "Trending Users"
const secondSectionTitle = "Most Active Users"
const thirdSectionTitle = "Top Repositories"

const HomeView = ({ searched,topRepositories, topActiveUsers, topPopularUsers, error }) => (
  <>
    <Navbar searched={searched}/>
    <FlexBox>
      <Box> {error ? <ErrorFeedback/> : (
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