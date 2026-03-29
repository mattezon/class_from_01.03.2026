import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import styles from './ProductDetail.module.css'

function ProductDetail() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setLoading(true)
				const response = await fetch(`https://dummyjson.com/products/${id}`)
				if (!response.ok) {
					throw new Error('Не удалось загрузить продукт')
				}
				const data = await response.json()
				setProduct(data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchProduct()
	}, [id])

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	if (!product) {
		return <div>Продукт не найден</div>
	}

	return (
		<div className={styles.container}>
			<button onClick={() => navigate('/products')} className={styles.backButton}>
				← Вернуться к продуктам
			</button>
			<div className={styles.content}>
				<div className={styles.imageContainer}>
					<img src={product.thumbnail} alt={product.title} />
				</div>
				<div className={styles.details}>
					<h1>{product.title}</h1>
					<p className={styles.description}>{product.description}</p>
					<div className={styles.info}>
						<p>
							<strong>Цена:</strong> ${product.price}
						</p>
						<p>
							<strong>Рейтинг:</strong> {product.rating}/5
						</p>
						<p>
							<strong>Наличие:</strong> {product.stock > 0 ? 'В наличии' : 'Нет в наличии'}
						</p>
						<p>
							<strong>Бренд:</strong> {product.brand}
						</p>
						<p>
							<strong>Категория:</strong> {product.category}
						</p>
					</div>
					{product.images && product.images.length > 0 && (
						<div className={styles.imagesGallery}>
							<h2>Дополнительные изображения:</h2>
							<div className={styles.gallery}>
								{product.images.map((image, index) => (
									<img key={index} src={image} alt={`Product ${index}`} />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
