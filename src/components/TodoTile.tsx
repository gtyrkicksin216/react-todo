import { Todo } from "../models/todo.model";
import styles from '../styles/components/todo-tile.module.scss'
import { klassList } from "../utils/klassList";
import DeleteTodoButton from "./DeleteTodoButton";

type TodoTileProps = Todo & {
	onClicked: (id: string) => void
	onDelete: (id: string) => void
}

function TodoTile(props: TodoTileProps) {
	return (
		<li
			className={styles.tile}
			onClick={() => props.onClicked(props.id)}
		>
			<span className={klassList(styles['tile-text'], props.completed && styles['is--completed'])}>
				{props.message}
			</span>
			{props.completed && <DeleteTodoButton onClicked={() => props.onDelete(props.id)} />}
		</li>
	)
}

export default TodoTile
