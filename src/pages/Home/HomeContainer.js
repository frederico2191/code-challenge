import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getTopActiveUsers, getTopPopularUsers, getTopRepositories } from '../../api'
import HomeView from './HomeView'

const HomeContainer = () => {
  const [topPopularUsers, setTopPopularUsers] = useState([])
  const [topActiveUsers, setTopActiveUsers] = useState([])
  const [topRepositories, setTopRepositories] = useState([])
  const [searchParams] = useSearchParams();
  const [searched,setSearched] = useState('')
  const [error, setError] = useState(false)

  const fromURL = searchParams.get('query')
  
  useEffect(()=>{
    setSearched(fromURL)
  },[fromURL,searched])
  
    useEffect(() => {
      (async () => {
        const fetchedTopActiveUsers = await getTopActiveUsers({searched});
        const fetchedTopPopularUsers = await getTopPopularUsers({searched});
        const fetchedTopRepositories = await getTopRepositories({searched});

        if (fetchedTopActiveUsers.error || fetchedTopPopularUsers.error || fetchedTopRepositories.error) setError(true)
        
        setTopPopularUsers(fetchedTopPopularUsers)
        setTopActiveUsers(fetchedTopActiveUsers)
        setTopRepositories(fetchedTopRepositories.items)
      })()
    }, [searched])

  return <HomeView topRepositories={topRepositories} topActiveUsers={topActiveUsers} topPopularUsers={topPopularUsers} error={error}/>
}

export default HomeContainer