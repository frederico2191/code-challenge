import React, { useEffect, useState } from 'react'
import Logo from "../../images/Logo"
import Navbar from './components/navbar/Navbar';
import Card from './components/userSection/Card';
import {getTopPopularUsers} from '../../api';
import {getTopActiveUsers} from '../../api';
import {getSelectedUsers} from '../../api';

import { styled } from '../../stitches.config';

const Box = styled('div',{
    margin: "$2", 
    display: "flex",
    flexWrap: "wrap", 
    gap: "$2"
  
  })
  const Button = styled('button', {
      backgroundColor: '$orangeDark',
      padding: '$1',
      borderRadius: 5
  })

  

  
  const HomeView = () => {
    const [topPopularUsers, setTopPopularUsers] = useState([])
    const [topActiveUsers, setTopActiveUsers] = useState([])
  
    useEffect(() => {
      (async () => {
        const fetchedTopPopularUsers = await getTopPopularUsers();
        const fetchedTopActiveUsers = await getTopActiveUsers();
        setTopPopularUsers(fetchedTopPopularUsers)
        setTopActiveUsers(fetchedTopActiveUsers)
      })()
    }, [])

    return (
      <>
      <Navbar/>
      {topPopularUsers.map(({login, avatar_url, id, followers, project}) => (
        <Card key={id} name={login} image={avatar_url} id={id} followers={followers} project={project}/>
      ))}
      {topActiveUsers.map(({login, avatar_url, id, followers, project}) => (
        <Card key={id} name={login} image={avatar_url} id={id} followers={followers} project={project}/>
      ))}

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