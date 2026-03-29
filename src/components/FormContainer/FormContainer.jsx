import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'
import styles from './FormContainer.module.css'
import { useState } from 'react'

function FormContainer() {
	const [inputText, setInputText] = useState('')

	return (
		<div className={styles['container']}>
			<Input inputText={inputText} setInputText={setInputText} />
			<TextArea />

			<div>
				<Button name='Добавить' onClick={() => {}} />
				<Button name='Очистить' onClick={() => {}} />
			</div>
		</div>
	)
}

export default FormContainer
