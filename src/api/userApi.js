import axios from 'axios'

const API_BASE_URL = 'https://dummyjson.com'

export const fetchUsers = async () => {
	try {
		const res = await axios.get(`${API_BASE_URL}/users`)
		return res.data.users
	} catch (error) {
		console.error('Error fetching users: ', error)
		throw error
	}
}
