import { Todo } from '../lib/types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  isUpdating?: boolean
}

export default function TodoItem({ todo, onToggle, onDelete, isUpdating = false }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5"
        disabled={isUpdating}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <span 
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        aria-label={todo.title}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isUpdating}
        aria-label={`Delete "${todo.title}"`}
      >
        {isUpdating ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  )
} 