import axios from "axios"

export const fetchUsers = async  (array) => {
    console.log("ARRAY333", array)
    await Promise.all(array.map(async el => {
        const user = await axios.get(el.url)
        console.log('user', user.data)
        return user.data
    }))
} 