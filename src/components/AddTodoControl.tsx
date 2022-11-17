import { useState, KeyboardEvent } from 'react'
import AddTodoButton from './AddTodoButton'
import styles from '../styles/components/add-todo-control.module.scss'

interface AddTodoControlProps {
	onAddTodo: (v?: string) => void
}

function AddTodoControl(props: AddTodoControlProps) {
	const [value, setValue] = useState<string>('')

	function handleInputChange(value: string): void {
		setValue(value)
	}

	function handleAddOnEnter(ev: KeyboardEvent) {
		if (ev.key === 'Enter') {
			handleAddTodo()
		}
	}

	function handleAddTodo() {
		if (!value) return
		props.onAddTodo(value)
		setValue('')
	}

	return (
		<div className={styles.group}>
			<input
				value={value}
				type="text"
				placeholder="Add a Todo"
				className={styles.input}
				onChange={(ev) => handleInputChange(ev.target.value)}
				onKeyDown={(ev) => handleAddOnEnter(ev)}
			/>
			<AddTodoButton onClicked={handleAddTodo} />
		</div>
	)
}

export default AddTodoControl
