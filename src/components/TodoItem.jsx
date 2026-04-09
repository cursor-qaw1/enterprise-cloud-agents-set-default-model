export function TodoItem({ item, onToggle, onRemove }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
        opacity: item.done ? 0.65 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onToggle(item.id)}
        aria-label={item.done ? "Mark not done" : "Mark done"}
      />
      <span
        style={{
          flex: 1,
          textDecoration: item.done ? "line-through" : "none",
          color: "#333",
        }}
      >
        {item.text}
      </span>
      <button
        type="button"
        style={{
          padding: "6px 10px",
          fontSize: "0.85rem",
          border: "none",
          borderRadius: "6px",
          background: "#fee2e2",
          color: "#b91c1c",
          cursor: "pointer",
        }}
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </li>
  );
}
