import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import styles from './Products.module.css'

function Products() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true)
				const response = await fetch('https://dummyjson.com/products')
				if (!response.ok) {
					throw new Error('Не удалось загрузить продукты')
				}
				const data = await response.json()
				setProducts(data.products)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<div>
			<h1>Продукты</h1>
			<div className={styles.productsList}>
				{products.map((product) => (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className={styles.productCard}
					>
						<img
							src={product.thumbnail}
							alt={product.title}
							className={styles.image}
						/>
						<h3>{product.title}</h3>
						<p className={styles.price}>${product.price}</p>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Products
