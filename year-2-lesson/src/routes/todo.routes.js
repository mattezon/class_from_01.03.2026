const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo.controller')

// POST /api/todos - Создание новой задачи
router.post('/', TodoController.createTodo)

// GET /api/todos - Получение всех задач
router.get('/', TodoController.getAllTodos)

// GET /api/todos/priority - Получение задач по приоритету
router.get('/priority', TodoController.getTodosByPriority)

// GET /api/todos/:id - Получение конкретной задачи по id
router.get('/:id', TodoController.getTodoById)

// PUT /api/todos/:id - Обновление задачи
router.put('/:id', TodoController.updateTodo)

// DELETE /api/todos/:id - Удаление задачи
router.delete('/:id', TodoController.deleteTodo)

module.exports = router
