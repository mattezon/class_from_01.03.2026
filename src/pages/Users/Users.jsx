import FormContainer from '../../components/FormContainer/FormContainer'
import UsersContainer from '../../components/UsersContainer/UsersContainer'
import styles from './Users.module.css'

function Users() {
	return (
		<div>
			<h1>Users</h1>
			<div className={styles.container}>
				<FormContainer />
				<UsersContainer />
			</div>
		</div>
	)
}

export default Users
