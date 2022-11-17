import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodoControl from './components/AddTodoControl'
import { addTodo, deleteTodo, getTodos, markCompleted } from './services/todo.service'
import './app.scss'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      try {
        await populateTodos()
      } catch (err) {
        console.error(err)
      }
    }
    getTodos()
  }, [])

  function handleAddTodo(value?: string) {
    if (!value) return
    // handle adding the todo
    const _addTodo = async () => {
      try {
        await addTodo(value)
        await populateTodos()
      } catch (err) {
        console.error(err)
      }
    }
    _addTodo()
  }

  function handleMarkCompleted(id: string) {
    if (!id) return
    const _markCompleted = async () => {
      try {
        await markCompleted(id)
        await populateTodos()
      } catch (err) {
        console.error(err)
      }
    }
    _markCompleted()
  }

  function handleDeleteTodo(id: string) {
    if (!id) return
    const _handleDelete = async () => {
      try {
        await deleteTodo(id)
        await populateTodos()
      } catch (err) {
        console.error(err)
      }
    }
    _handleDelete()
  }

  async function populateTodos() {
    try {
      const _todos = await getTodos().then(res => res.json())
      setTodos(_todos)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="app">
      <section className="app__todos">
        <AddTodoControl onAddTodo={handleAddTodo} />
        <div className="app__todos-list">
          <TodoList
            todos={todos}
            onMarkCompleted={(e) => handleMarkCompleted(e)}
            onDelete={(e) => handleDeleteTodo(e)}
          />
        </div>
      </section>
    </div>
  )
}

export default App
