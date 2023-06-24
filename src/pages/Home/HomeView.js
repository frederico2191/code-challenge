import React, { useEffect, useState } from 'react'
import Logo from "../../assets/images/Logo"
import Navbar from './components/Navbar/Navbar';
import CardContainer from './components/UserSection/Card/CardContainer';
import UserSection from './components/UserSection'
import RepoSection from './components/RepoSection'

import {getTopRepositories, getTopPopularUsers} from '../../api';
import {getTopActiveUsers} from '../../api';
import {getSelectedUsers} from '../../api';

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

const firstSectionTitle = "Trending Users"
const secondSectionTitle = "Most Active Users"
const thirdSectionTitle = "Top Repositories"
  
  const HomeView = () => {
    const [topPopularUsers, setTopPopularUsers] = useState([])
    const [topActiveUsers, setTopActiveUsers] = useState([])
    const [topRepositories, setTopRepositories] = useState([])
    const [searched,setSearched] = useState('')
  
    useEffect(() => {
      (async () => {
        const fetchedTopPopularUsers = await getTopPopularUsers({searched});
        // const fetchedTopActiveUsers = await getTopActiveUsers({searched});
        // const fetchedTopRepositories = await getTopRepositories({searched});
        setTopPopularUsers(fetchedTopPopularUsers)
        // setTopActiveUsers(fetchedTopActiveUsers)
        // setTopRepositories(fetchedTopRepositories.items)


      })()
    }, [])

    
    return (
      <>
      <Navbar/>
      <FlexBox>
        <Box>
            <UserSection title={firstSectionTitle} users={topPopularUsers}/>
            {/* <UserSection title={secondSectionTitle} users={topActiveUsers}/> 
            <RepoSection title={thirdSectionTitle} repos={topRepositories} /> */}
        </Box>
      </FlexBox>
    </>
    )
  }

export default HomeView