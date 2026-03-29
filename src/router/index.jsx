import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home/Home'
import Users from '../pages/Users/Users'
import About from '../pages/About/About'
import Products from '../pages/Products/Products'
import ProductDetail from '../pages/ProductDetail/ProductDetail'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'users',
				element: <Users />
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path: 'products',
				element: <Products />
			},
			{
				path: 'products/:id',
				element: <ProductDetail />
			}
		]
	}
])
