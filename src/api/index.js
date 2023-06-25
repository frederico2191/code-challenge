import axios from "axios"

import { awaitResponse, monthAgo, yearAgo, BASE_URL, MAX_PROFILES,MAX_REPOS} from "./utils";


const getTopPopularUsers = async ({searched}) => {
    const query = encodeURIComponent(searched ? `${searched} created:>=${monthAgo}`: `created:>=${monthAgo}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=followers&per_page=${MAX_PROFILES}`

    // const response = awaitResponse(url) 
    // const response = async() => {
    //     const res = await awaitResponse(url)
    //     return res
    //   }
    const response = await axios.get(url,{
        headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_KEY
        }
         })
    console.log("response inside index!!!",response)

    const fetchedTopPopularUsers = await Promise.all(response.data.items?.map(async el => getUser(el?.url)))
    // const fetchedTopPopularUsers = await Promise.all(response.data.items?.map(async el => getUser(el?.url)))
    return fetchedTopPopularUsers
}

const getTopActiveUsers = async ({searched}) => {
    const query = encodeURIComponent(searched ? `${searched} created:>=${monthAgo}`: `created:>=${monthAgo}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=repositories&per_page=${MAX_PROFILES}`
    const response = awaitResponse(url)    
    const fetchedTopActiveUsers = await Promise.all(response.items?.map(async el => getUser(el?.url)))
    return fetchedTopActiveUsers
}

const getUser = async (url) => {
    return awaitResponse(url)
}

const getUserTopRatedRepo = async ({ username }) => {
    const query = encodeURIComponent(`user:${username}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=1`
    return awaitResponse(url)}

const getTopRepositories = async ({searched}) => {
    const query = encodeURIComponent(searched ? `created:>=${yearAgo} in:name ${searched}`: `created:>=${yearAgo}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=${MAX_REPOS}`
    
    return awaitResponse(url)
}

export { getTopPopularUsers,getTopActiveUsers, getUserTopRatedRepo, getUser, getTopRepositories }
