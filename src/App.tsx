import React, { useState, useReducer, useMemo } from 'react';
import { Todo, FilterType } from './types/todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import Header from './components/Header';
import { todoReducer, TodoAction } from './reducers/todoReducer';
import { ThemeProvider } from './context/ThemeContext';

const initialTodos: Todo[] = [
  { id: '1', title: 'Nauczyć się Reacta', completed: false },
  { id: '2', title: 'Praktykować TypeScript', completed: true }
];

export default function App() {
  // Stan filtru
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Stan listy zadań - refaktoryzacja do useReducer
  // Konsola reduxowy styl: używamy dispatch({type, payload})
  const [state, dispatch] = useReducer(todoReducer, { todos: initialTodos });

  // Dodawanie zadania
  const handleAdd = (text: string) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  // Przełączanie ukończony/aktywne
  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  // Usuwanie zadania
  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  // Edycja tytułu zadania
  const handleEdit = (id: string, newTitle: string) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, title: newTitle } });
  };

  // Filtrowanie listy zadań na podstawie activeFilter
  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => {
      if (activeFilter === 'active') return !todo.completed;
      if (activeFilter === 'completed') return todo.completed;
      return true;
    });
  }, [state.todos, activeFilter]);

  return (
    <ThemeProvider>
    <div>
      {/* Nagłówek z licznikiem */}
      <Header activeCount={state.todos.filter(t => !t.completed).length} totalCount={state.todos.length} />

      {/* Formularz dodawania */}
      <TodoInput onAdd={handleAdd} />

      {/* Pasek filtrów */}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Lista zadań */}
      <TodoList 
        todos={filteredTodos} 
        onToggle={handleToggle} 
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
    </ThemeProvider>
  );
}