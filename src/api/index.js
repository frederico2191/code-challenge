import axios from "axios"
import * as moment from 'moment'
// import { fetchUsers } from "./utils";

const BASE_URL = 'https://api.github.com'
const MAX_PROFILES = 3
const MAX_REPOS = 4

const monthAgo = new Date().setMonth(new Date().getMonth() - 1)
const monthAgoFormatted = moment(monthAgo).format('YYYY-MM-DD')
const yearAgo = new Date().setFullYear(new Date().getFullYear() - 1)
const yearAgoFormated = moment(yearAgo).format('YYYY-MM-DD')
console.log("yearagoFormated", yearAgoFormated)


const getTopPopularUsers = async ({searched}) => {
    const query = encodeURIComponent(searched ? `${searched} created:>=${monthAgoFormatted}`: `created:>=${monthAgoFormatted}`)

    const url = `${BASE_URL}/search/users?q=${query}&sort=followers&per_page=${MAX_PROFILES}`

    const response = await axios.get(url,{
        headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_KEY
        }
         })
    
    const fetchedTopPopularUsers = await Promise.all(response.data?.items?.map(async el => getUser(el?.url)))
    return fetchedTopPopularUsers
}

const getTopActiveUsers = async ({searched}) => {
    const query = encodeURIComponent(searched ? `${searched} created:>=${monthAgoFormatted}`: `created:>=${monthAgoFormatted}`)

    const url = `${BASE_URL}/search/users?q=${query}&sort=repositories&per_page=${MAX_PROFILES}`
    
    const response = await axios.get(url,{
        headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_KEY
        }
         })
    
    const fetchedTopActiveUsers = await Promise.all(response.data?.items?.map(async el => getUser(el?.url)))
    return fetchedTopActiveUsers
}

const getUser = async (url) => {
    const response = await axios.get(url)
    return response.data
}

const getUserTopRatedRepo = async ({ username }) => {
    const query = encodeURIComponent(`user:${username}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=1`
    
    const response = await axios.get(url,{
        headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_KEY
        }
         })
    return response.data
}

const getTopRepositories = async ({searched}) => {
    const query = encodeURIComponent(searched ? `created:>=${yearAgoFormated} in:name ${searched}`: `created:>=${yearAgoFormated}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=${MAX_REPOS}`
    
    const response = await axios.get(url,{
        headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_KEY
        }
         })
 
    return response.data
}




export { getTopPopularUsers,getTopActiveUsers, getUserTopRatedRepo, getUser, getTopRepositories }
