# Next.js Todo App Template

A modern, accessible, and feature-rich Todo application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- ♿️ Fully accessible with ARIA labels
- 💾 Local storage persistence
- 📱 Responsive design
- 🔄 Loading states
- 🎯 Type-safe with TypeScript
- 🧩 Component-based architecture
- 🔄 State management with React Context

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context
- **Storage:** LocalStorage
- **Development Tools:** TypeScript, ESLint, PostCSS

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-todo-template.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/
│   ├── todo-list.tsx
│   ├── todo-item.tsx
│   └── add-todo-form.tsx
├── lib/
│   ├── todo-context.tsx
│   └── types.ts
├── globals.css
├── layout.tsx
└── page.tsx
```

## Features in Detail

### Todo Management
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Persistent storage with localStorage

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure

### User Experience
- Loading states during operations
- Empty state handling
- Responsive design
- Smooth transitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- React team for the component-based architecture 