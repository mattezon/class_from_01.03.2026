const TodoService = require('../services/todo.service')

class TodoController {
	async createTodo(req, res) {
		try {
			const result = await TodoService.createTodo(req.body)

			if (!result.success) {
				return res.status(400).json(result)
			}

			res.status(201).json(result)
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server error'
			})
		}
	}
	async updateTodo(req, res) {
		try {
			const result = await TodoService.updateTodo(req.params.id, req.body)

			if (!result.success) {
				return res.status(404).json(result)
			}

			res.status(200).json(result)
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: `Server error: ${err.message}`
			})
		}
	}

	async deleteTodo(req, res) {
		try {
			const result = await TodoService.deleteTodo(req.params.id)

			if (!result.success) {
				return res.status(404).json(result)
			}

			res.status(200).json(result)
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: `Server error: ${err.message}`
			})
		}
	}

	async getTodoById(req, res) {
		try {
			const result = await TodoService.getTodoById(req.params.id)

			if (!result.success) {
				return res.status(404).json(result)
			}

			res.status(200).json(result)
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: `Server error: ${err.message}`
			})
		}
	}

	async getAllTodos(req, res) {
		try {
			const result = await TodoService.getAllTodos()

			if (!result.success) {
				return res.status(400).json(result)
			}

			res.status(200).json(result)
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: `Server error: ${err.message}`
			})
		}
	}

	async getTodosByPriority(req, res) {
		try {
			const { priority } = req.query

			if (!priority) {
				return res.status(400).json({
					success: false,
					error: 'Priority parameter is required'
				})
			}

			const result = await TodoService.getTodosByPriority(priority)

			if (!result.success) {
				return res.status(400).json(result)
			}

			res.status(200).json(result)
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: `Server error: ${err.message}`
			})
		}
	}
}

module.exports = new TodoController()
