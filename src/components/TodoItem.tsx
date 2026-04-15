import { Todo } from '/src/assets/types/todo.types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #ccc' }}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.6 : 1,
        flexGrow: 1 
      }}>
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ color: 'red', cursor: 'pointer' }}>
        Usuń
      </button>
    </div>
  );
}