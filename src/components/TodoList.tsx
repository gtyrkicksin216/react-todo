import { Todo } from "../models/todo.model"
import TodoTile from './TodoTile'
import styles from '../styles/components/todos.module.scss'

interface TodoListProps {
	todos: Todo[];
	onMarkCompleted: (id: string) => void
	onDelete: (id: string) => void
}

function TodoList(props: TodoListProps) {
	return (
		<section className={styles.todos}>
			{props.todos && props.todos.length
				? <ul className={styles['todos-list']}>
						{props.todos.map(t => (
							<TodoTile
								completed={t.completed}
								id={t.id}
								message={t.message}
								key={t.id}
								onClicked={(e) => props.onMarkCompleted(e)}
								onDelete={(e) => props.onDelete(e)}
							/>
							))}
					</ul>
				: <div className={styles['no-results']}>
						<p className={styles['no-results-text']}>Kick Back and Relax!</p>
						<p className={styles['no-results-subtext']}>
							Nothing To Do
						</p>
					</div>
			}
		</section>
	)
}

export default TodoList
