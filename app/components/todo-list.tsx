'use client'

import TodoItem from './todo-item'
import { useTodo } from '../lib/todo-context'

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodo()

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No todos yet. Add one above!</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3" role="list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  )
} 