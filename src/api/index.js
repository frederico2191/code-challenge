import axios from "axios"
import * as moment from 'moment'
// import { fetchUsers } from "./utils";

const BASE_URL = 'https://api.github.com'
const MAX_PROFILES = 3
const MAX_REPOS = 4

const present = new Date();
const monthAgo = present.setMonth(present.getMonth() - 1)
const monthAgoFormatted = moment(monthAgo).format('YYYY-MM-DD')

const yearAgo = present.setFullYear(present.getFullYear() - 1)
const yearAgoFormated = moment(yearAgo).format('YYYY-MM-DD')

const getTopPopularUsers = async () => {
    const query = encodeURIComponent(`created:>=${monthAgoFormatted}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=followers&per_page=${MAX_PROFILES}`

    const response = await axios.get(url)
    
    const fetchedTopPopularUsers = await Promise.all(response.data?.items?.map(async el => getUser(el?.url)))
    return fetchedTopPopularUsers
}

const getTopActiveUsers = async () => {
    const query = encodeURIComponent(`created:>=${monthAgoFormatted}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=repositories&per_page=${MAX_PROFILES}`
    
    const response = await axios.get(url)
    
    const fetchedTopActiveUsers = await Promise.all(response.data?.items?.map(async el => getUser(el?.url)))
    return fetchedTopActiveUsers
}

const getUser = async (url) => {
    const response = await axios.get(url)
    return response.data
}

const getUserTopRatedRepo = async ({ username }) => {
    const query = encodeURIComponent(`user:${username}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=stars&per_page=1`
    
    const response = await axios.get(url)
    return response.data
}

const getMostStarredRepositories = async () => {
    const query = encodeURIComponent(`created:${yearAgoFormated}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=${MAX_REPOS}`
    
    const response = await axios.get(url)
    return response.data
}

export { getTopPopularUsers,getTopActiveUsers, getUserTopRatedRepo, getUser, getMostStarredRepositories }
