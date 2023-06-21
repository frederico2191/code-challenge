import React, { useEffect, useState } from 'react'
import Logo from "../../images/Logo"
import Navbar from './components/navbar/Navbar';
import CardContainer from './components/userSection/card/CardContainer';
import UserSection from '../Home/components/userSection'
import RepoSection from '../Home/components/repoSection'

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
const thirdSectionTitle = "Trending Users"

// const Box = styled('div',{
//     margin: "$2", 
//     display: "flex",
//     flexWrap: "wrap", 
//     gap: "$2"
  
//   })
  // const Button = styled('button', {
  //     backgroundColor: '$orangeDark',
  //     padding: '$1',
  //     borderRadius: 5
  // })
  
  const HomeView = () => {
    const [topPopularUsers, setTopPopularUsers] = useState([])
    const [topActiveUsers, setTopActiveUsers] = useState([])
    const [topRepositories, setTopRepositories] = useState([])
    const [searched,setSearched] = useState('')
  
    useEffect(() => {
      (async () => {
        const fetchedTopPopularUsers = await getTopPopularUsers({searched});
        const fetchedTopActiveUsers = await getTopActiveUsers({searched});
        const fetchedTopRepositories = await getTopRepositories({searched});
        setTopPopularUsers(fetchedTopPopularUsers)
        setTopActiveUsers(fetchedTopActiveUsers)
        setTopRepositories(fetchedTopRepositories.items)

      })()
    }, [searched])

    useEffect(()=>{
      const lol = () => {setSearched("lol")}
      lol()
    },[])
    
    return (
      <>
      <Navbar/>
      <FlexBox>
        <Box>
            {/* <UserSection title="Trending Users" /> */}
            <UserSection title={firstSectionTitle} topPopularUsers={topPopularUsers}/>
            <UserSection title={secondSectionTitle} />
            <RepoSection title={thirdSectionTitle} />
            {/* {topPopularUsers.map((popularUser) => (
              console.log("popularuser111", popularUser),
              <CardContainer key={popularUser.id} popularUser={popularUser}/>))}
            {topActiveUsers.map(({login, avatar_url, id, followers, project}) => (
              <CardContainer key={id} name={login} image={avatar_url} id={id} followers={followers} project={project}/>
            ))}
            {topRepositories.map(({name, description, id, stargazers_count}) => (
              <CardContainer key={id} name={name} description={description} stars={stargazers_count}/>
            ))} */}
        </Box>
      </FlexBox>

      {/* <Box
      style={{
        backgroundColor: 'blue',
        width: '100px',
        height: '100px'
      }}
      > */}
    {/* <img src={logo} alt="logo"/> */}
    {/* <Logo/>
    <Button>Click meee!</Button>
    </Box> */}
    </>
    )
  }

export default HomeView