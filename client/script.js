axios.defaults.baseURL = 'http://localhost:3000/api'

const todoForm = document.querySelector('#todoForm')
const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const prioritySelect = document.querySelector('#priority')
const submitBtn = document.querySelector('#submitBtn')
const todoList = document.querySelector('.todoList')

let editingId = null

todoForm.addEventListener('submit', async e => {
	e.preventDefault()

	const todoData = {
		title: titleInput.value,
		description: descriptionInput.value,
		priority: prioritySelect.value
	}

	try {
		if (!editingId) {
			await axios.post('/todos', todoData)
		} else {
			await axios.put(`/todos/${editingId}`, todoData)
			editingId = null
			submitBtn.textContent = 'Добавить'
		}

		todoForm.reset()
		prioritySelect.value = 'medium'
		fetchTodos()
	} catch (error) {
		alert('Ошибка при добавлении: ' + error.message)
	}
})

const fetchTodos = async () => {
	try {
		const response = await axios.get('/todos')
		renderTodos(response.data.data)
	} catch (error) {
		console.error('Ошибка получения задач: ', error)
	}
}

const handleToggleComplete = async e => {
	const todoItem = e.target.closest('.todo-item')
	const id = todoItem.dataset.id
	const completed = e.target.checked

	try {
		await axios.put(`/todos/${id}`, { completed })
		fetchTodos()
	} catch (error) {
		alert('Ошибка обновления статуса: ' + error.message)
	}
}

const renderTodos = todos => {
	if (!todos.length) {
		todoList.innerHTML = '<p>Задач нет.</p>'
		return
	}

	todoList.innerHTML = todos
		.map(todo => {
			return `
		<li class="todo-item" data-id=${todo._id}>
				<div class="leftPart">
					<input class="todo-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
					<span>${todo.title} - ${todo.description}</span>
					<span>[${todo.priority}]</span>
				</div>
				<div class="rightPart">
					<button class="edit-btn">Ред.</button>
					<button class="delete-btn">Удал.</button>
				</div>
		</li>
	`
		})
		.join('')

	document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
		checkbox.addEventListener('change', handleToggleComplete)
	})

	// обработчик на удаление
	document.querySelectorAll('.delete-btn').forEach(btn => {
		btn.addEventListener('click', async e => {
			const item = e.target.closest('.todo-item')
			const id = item.dataset.id
			if (!confirm('Удалить задачу?')) return
			try {
				await axios.delete(`/todos/${id}`)
				fetchTodos()
			} catch (err) {
				alert('Ошибка удаления: ' + err.message)
			}
		})
	})

	// обработчик на редактирование
	document.querySelectorAll('.edit-btn').forEach(btn => {
		btn.addEventListener('click', async e => {
			const item = e.target.closest('.todo-item')
			const id = item.dataset.id
			try {
				const res = await axios.get(`/todos/${id}`)
				const todo = res.data.data
				titleInput.value = todo.title || ''
				descriptionInput.value = todo.description || ''
				prioritySelect.value = todo.priority || 'medium'
				editingId = id
				submitBtn.textContent = 'Сохранить'
			} catch (err) {
				alert('Ошибка загрузки задачи: ' + err.message)
			}
		})
	})
}

document.addEventListener('DOMContentLoaded', fetchTodos)
