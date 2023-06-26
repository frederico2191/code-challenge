import { awaitResponse, monthAgo, yearAgo, BASE_URL, MAX_PROFILES,MAX_REPOS} from "./utils";

const getTopPopularUsers = async ({searched}) => {
    const query = encodeURIComponent(searched?.trim() ? `${searched} created:>=${monthAgo}`: `created:>=${monthAgo}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=followers&per_page=${MAX_PROFILES}`
    let response = await awaitResponse(url)

    if (response.error) return { error: response.error }

    let fetchedTopPopularUsers = await Promise.all(response.items?.map(async el => getUser(el?.url)))
    return fetchedTopPopularUsers
}
   
const getTopActiveUsers = async ({searched}) => {
    const query = encodeURIComponent(searched?.trim() ? `${searched} created:>=${monthAgo}`: `created:>=${monthAgo}`)
    const url = `${BASE_URL}/search/users?q=${query}&sort=repositories&per_page=${MAX_PROFILES}`
    let response = await awaitResponse(url)

    if (response.error) return { error: response.error }

    let fetchedTopActiveUsers = await Promise.all(response.items?.map(async el => getUser(el?.url)))
    return fetchedTopActiveUsers
}

const getUser = async (url) => {
    try {
        return awaitResponse(url) 
    } catch (error) {
        console.log('error getting user: ', error)
        return { error }
    }
}

const getUserTopRatedRepo = async ({ username }) => {
    const query = encodeURIComponent(`user:${username}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=1`
    
    return awaitResponse(url)
}

const getTopRepositories = async ({searched}) => {
    const query = encodeURIComponent(searched?.trim() ? `created:>=${yearAgo} in:name ${searched}`: `created:>=${yearAgo}`)
    const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=${MAX_REPOS}`
    
    return awaitResponse(url)
}

export { getTopPopularUsers,getTopActiveUsers, getUserTopRatedRepo, getUser, getTopRepositories }
