import TodoList from './components/todo-list'
import AddTodoForm from './components/add-todo-form'

export const metadata = {
  title: 'Todo List',
  description: 'A simple todo list application built with Next.js',
}

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Todo List</h1>
      <div className="space-y-6">
        <AddTodoForm />
        <TodoList />
      </div>
    </main>
  )
} 