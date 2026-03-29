function Input({ inputText, setInputText }) {
	return (
		<input
			value={inputText}
			placeholder='Введите заголовок'
			onChange={e => {
				setInputText(e.target.value)
			}}
		/>
	)
}
export default Input
