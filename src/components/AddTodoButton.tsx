import styles from '../styles/components/add-todo-button.module.scss'

interface AddTodoButtonProps {
	onClicked: () => void
}

function AddTodoButton(props: AddTodoButtonProps) {
	return (
		<button
			className={styles.button}
			type="button"
			onClick={props.onClicked}
		>
			Add Todo
		</button>
	)
}

export default AddTodoButton
