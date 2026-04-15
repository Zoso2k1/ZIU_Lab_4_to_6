import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const handleEdit = () => {
    const newTitle = prompt('Zmień tytuł zadania:', todo.title);
    if (newTitle !== null) {
      onEdit(todo.id, newTitle);
    }
  };
  return (
    <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ 
          marginLeft: '0.5rem', 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          flexGrow: 1 
        }}>
        {todo.title}
      </span>
      <button onClick={handleEdit} style={{ marginRight: '0.5rem' }}>Edytuj</button>
      <button onClick={() => onDelete(todo.id)}>Usuń</button>
    </li>
  );
}
