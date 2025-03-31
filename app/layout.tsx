import './globals.css'
import type { Metadata } from 'next'
import { TodoProvider } from './lib/todo-context'

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A simple todo application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  )
} 