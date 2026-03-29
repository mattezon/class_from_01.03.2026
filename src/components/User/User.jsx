import styles from './User.module.css'

function User({ username, firstName, lastName, age, email }) {
	return (
		<div className={styles.user}>
			<div className={styles.delete}>X</div>
			<h3>{username}</h3>
			<p>
				{firstName} {lastName}
			</p>
			<p>{age}</p>
			<p>{email}</p>
		</div>
	)
}

export default User
