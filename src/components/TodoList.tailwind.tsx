import React from 'react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoListTailwind({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500 mt-8">Brak zadań. Dodaj pierwsze!</p>;
  }
  return (
    <ul className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
      {todos.map(todo => (
        <li key={todo.id}
            className={`flex items-center gap-3 px-4 py-3 ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="w-5 h-5"
          />
          <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </span>
          <button 
            onClick={() => onDelete(todo.id)} 
            className="text-red-500 hover:text-red-700"
          >
            Usuń
          </button>
        </li>
      ))}
    </ul>
  );
}
