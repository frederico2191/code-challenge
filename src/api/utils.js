import axios from "axios"
import moment from 'moment'


export const BASE_URL = 'https://api.github.com'
export const MAX_PROFILES = 3
export const MAX_REPOS = 4

export const fetchUsers = async  (array) => {
    await Promise.all(array.map(async user => {
        const fetchedUser = await axios.get(user.url)
        return fetchedUser.data
    }))
} 

export const awaitResponse = async (url) => { 
    const response = await axios.get(url,{
    headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_KEY
    }
     })
    console.log("I am the utils return:",response.data)
    return response.data
    }

const monthAgoDate = new Date().setMonth(new Date().getMonth() - 1)
export const monthAgo = moment(monthAgoDate).format('YYYY-MM-DD')

const yearAgoDate = new Date().setFullYear(new Date().getFullYear() - 1)
export const yearAgo = moment(yearAgoDate).format('YYYY-MM-DD')
