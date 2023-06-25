import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getTopRepositories } from '../../api'
import HomeView from './HomeView'

const HomeContainer = () => {
  const [topPopularUsers, setTopPopularUsers] = useState([])
  const [topActiveUsers, setTopActiveUsers] = useState([])
  const [topRepositories, setTopRepositories] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched,setSearched] = useState('')
  // setSearched(searchParams.getAll('query'))
  
  // const params = useParams();
  // setSearchParams(searchParams.get("query"))
  // console.log("searchParams",searchParams)
  
    useEffect(() => {
      (async () => {
        // console.log("params", params)
        // const query = searchParams.get('')
        // setSearchParams(query)
        // console.log("searchParams", searchParams)
        // const fetchedTopPopularUsers = await getTopPopularUsers({searched});
        // console.log("RETURN in homeview:::",fetchedTopPopularUsers)
        // const fetchedTopActiveUsers = await getTopActiveUsers({searched});
        const fetchedTopRepositories = await getTopRepositories({searched});
        // setTopPopularUsers(fetchedTopPopularUsers)
        // setTopActiveUsers(fetchedTopActiveUsers)
        setTopRepositories(fetchedTopRepositories.items)
        // setSearched(searchParams)


      })()
    }, [])

  return <HomeView  topRepositories={topRepositories} topActiveUsers={topActiveUsers} topPopularUsers={topPopularUsers} />
}

export default HomeContainer