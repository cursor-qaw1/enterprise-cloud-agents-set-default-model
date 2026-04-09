import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo..."
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px', fontSize: 16 }}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderBottom: '1px solid #eee' }}>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
            <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#999' : '#000' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
