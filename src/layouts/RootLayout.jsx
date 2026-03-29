import styles from './RootLayout.module.css'
import { Outlet, NavLink } from 'react-router'

function RootLayout() {
	return (
		<div className={styles.layout}>
			<nav className={styles.navigation}>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
					}
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
					}
					to='/users'
				>
					Users
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
					}
					to='/about'
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
					}
					to='/products'
				>
					Products
				</NavLink>
			</nav>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	)
}

export default RootLayout
