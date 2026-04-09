import { useState } from "react";
import { TodoItem } from "./components/TodoItem.jsx";

export function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const add = () => {
    const t = text.trim();
    if (!t) return;
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text: t, done: false }]);
    setText("");
  };

  const toggle = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const remove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "48px auto",
        padding: "24px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ margin: "0 0 16px", fontSize: "1.5rem", color: "#1a1a1a" }}>To-do</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          style={{
            flex: 1,
            padding: "10px 12px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
          value={text}
          placeholder="What needs doing?"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button
          type="button"
          style={{
            padding: "10px 16px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={add}
        >
          Add
        </button>
      </div>
      {items.length === 0 ? (
        <p style={{ color: "#888", fontSize: "0.95rem", margin: "8px 0 0" }}>
          No tasks yet. Add one above.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item) => (
            <TodoItem key={item.id} item={item} onToggle={toggle} onRemove={remove} />
          ))}
        </ul>
      )}
    </div>
  );
}
