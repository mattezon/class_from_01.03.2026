import { useEffect, useState } from 'react'
import User from '../User/User'
import styles from './UsersContainer.module.css'
import { v4 as uuidv4 } from 'uuid'
import { fetchUsers } from '../../api/userApi'

function UsersContainer() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState(0)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getUsers = async () => {
			try {
				setLoading(true)
				const data = await fetchUsers()
				setUsers(data)
			} catch (error) {
				setError(error.message)
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		getUsers()
	}, [])

	useEffect(() => {
		if (count % 2 == 0) console.log('чётное')
		else console.log('нечётное')
	}, [count])

	if (loading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		)
	}

	if (error) {
		return (
			<div>
				<h2>Ошибка при получении пользователей: {error}</h2>
			</div>
		)
	}

	return (
		<div
			className={styles.container}
			onClick={() => {
				setCount(count + 1)
			}}
		>
			<h1>{count}</h1>
			{!users.length && (
				<p>
					Список заметок пуст. <br /> Добавьте первую...
				</p>
			)}
			{users.map(user => (
				<User
					key={uuidv4()}
					username={user.username}
					firstName={user.firstName}
					lastName={user.lastName}
					age={user.age}
					email={user.email}
				/>
			))}
		</div>
	)
}

export default UsersContainer
