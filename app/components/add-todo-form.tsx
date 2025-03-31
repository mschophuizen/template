'use client'

import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Todo } from '../lib/types'
import { useTodo } from '../lib/todo-context'

export default function AddTodoForm() {
  const [title, setTitle] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addTodo } = useTodo()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    setIsSubmitting(true)
    try {
      const newTodo: Todo = {
        id: nanoid(),
        title: title.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }

      addTodo(newTodo)
      setTitle('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <label htmlFor="todo-title" className="sr-only">
        New Todo
      </label>
      <input
        id="todo-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  )
} 