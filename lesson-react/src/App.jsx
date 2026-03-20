import './App.css'
import Block from './components/Block/Block'
import List from './components/List/List'
import { useState } from 'react'

function App() {
	let [currentCounter1, setCurrentCounter1] = useState(0)
	let [currentCounter2, setCurrentCounter2] = useState(0)
	let [currentCounter3, setCurrentCounter3] = useState(0)
	let [isDashed, setIsDashed] = useState(false)
	let [greenColor, setGreenColor] = useState('green')

	const makeNegative = () => {
		setCurrentCounter1((prev) => {
			const num = Number(prev)
			if (!Number.isFinite(num) || num === 0) return -1
			return -Math.abs(num)
		})
	}

	const toggleDashed = () => {
		setIsDashed((prev) => !prev)
		setCurrentCounter2((prev) => prev + 1)
	}

	const changeGreenColor = () => {
		const value = prompt('Введите цвет для блока')
		if (value && value.trim()) {
			setGreenColor(value.trim())
		}
		setCurrentCounter3((prev) => prev + 1)
	}

	return (
		<div>
			<h1>Hello from React!</h1>
			<div className='blocks'>
				<Block
					backgroundColor='red'
					counter={currentCounter1}
					onClick={makeNegative}
				/>
				<Block
					backgroundColor='aqua'
					counter={currentCounter2}
					onClick={toggleDashed}
					style={{ borderStyle: isDashed ? 'dashed' : 'solid' }}
				/>
				<Block
					backgroundColor={greenColor}
					counter={currentCounter3}
					onClick={changeGreenColor}
				/>
			</div>

			<List />
		</div>
	)
}

export default App
