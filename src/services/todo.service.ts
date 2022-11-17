import { Todo } from "../models/todo.model"

const endpointBase: string = 'http://localhost:3004/todos'

export async function getTodos() {
	return fetch(`${endpointBase}?_sort=completed`)
}

export async function addTodo(message: string) {
	const req: Todo = {
		message,
		id: new Date().getTime().toString(32),
		completed: false,
	}
	return fetch(endpointBase, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req),
	})
}

export async function markCompleted(id: string) {
	return fetch(
		`${endpointBase}/${id}`,
		{
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: true }),
		}
	)
}

export async function deleteTodo(id: string) {
	return fetch(
		`${endpointBase}/${id}`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			}
		}
	)
}
