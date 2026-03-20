import './Block.css'

function Block({ backgroundColor, counter, onClick, style }) {
	return (
		<div
			style={{ backgroundColor: backgroundColor, ...style }}
			className='block'
			onClick={onClick}
		>
			{counter}
		</div>
	)
}

export default Block
