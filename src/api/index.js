import axios from "axios"
import * as moment from 'moment'
// import { fetchUsers } from "./utils";

const BASE_URL = 'https://api.github.com'
const MAX_PROFILES = 3
const MAX_REPOS = 4

const present = new Date();
const monthAgo = present.setMonth(present.getMonth() - 1)
const monthAgoFormated = moment(monthAgo).format('YYYY-MM-DD')


// const encodeURIComponent() = encodeURL
// const response = await axios.get(encodedURL)

const getTopPopularUsers = async () => {
    const response = await axios.get(`https://api.github.com/search/users?per_page=3&q=created:%3E${monthAgoFormated}%20followers%3A%3E%3D100&ref=searchresults&s=followers&type=Users`)
    // const a = response.data.items
    // console.log(a,"AAAArra")
    // const fetchedTopPopularUsers = await fetchUsers(response.data.items)
    // console.log("555",fetchedTopPopularUsers)
    // return fetchedTopPopularUsers
    const fetchedTopPopularUsers = await Promise.all(response.data.items.map(async el => {
        const user = await axios.get(el.url)
        console.log('user', user.data)
        return user.data
    }))
    return fetchedTopPopularUsers
}




const getTopActiveUsers = async () => {
    const url = `${BASE_URL}/search/users?o=desc&per_page=${MAX_PROFILES}&q=created:>${monthAgoFormated} repos:>=10`
    const encodedUrl = encodeURIComponent(url)
    const response = await axios.get(encodedUrl)
    // const response = await axios.get(`https://api.github.com/search/users?o=desc&per_page=3&q=created:%3E${monthAgoFormated}%20repos%3A%3E%3D10&ref=searchresults&s=public_repos&type=Users`)
    
    const fetchedTopActiveUsers = await Promise.all(response.data.items.map(async el => {
            const user = await axios.get(el.url)
            console.log('user', user.data)
            return user.data
        }))
    console.log("fetchedTopActiveUsers new",fetchedTopActiveUsers)
    return fetchedTopActiveUsers

    // return await axios.get(`https://api.github.com/search/users?per_page=30&q=created:%3E${monthAgoFormated}%20repos%3A%3E%3D10`)
    // return await axios.get(`https://api.github.com/search/users?per_page=30&q=created:%3E${monthAgoFormated}%20repos%3A%3E%3D10&ref=searchresults&s=public_repos&type=Users`)
}




export {getTopPopularUsers,getTopActiveUsers}
