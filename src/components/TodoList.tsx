import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p>Brak zadań w tej kategorii.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            style={{ marginRight: '10px' }}
          />
          <span style={{ 
            flex: 1, 
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'gray' : 'black'
          }}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)} style={{ color: 'red' }}>Usuń</button>
        </li>
      ))}
    </ul>
  );
}