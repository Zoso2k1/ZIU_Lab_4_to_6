import React, { useState, useReducer, useMemo } from 'react';
import { Todo, FilterType } from './types/todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import Header from './components/Header';
import { todoReducer, TodoAction } from './reducers/todoReducer';
import { ThemeProvider } from './context/ThemeContext';

// 1. IMPORTUJEMY FORMULARZ Z LAB 7
import MultiStepForm from './components/forms/MultiStepForm';

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
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        
        {/* --- CZĘŚĆ 1: APLIKACJA TODO (Lab 4-6) --- */}
        <section>
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
        </section>

        {/* Linia oddzielająca projekty */}
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px dashed #ccc' }} />

        {/* --- CZĘŚĆ 2: FORMULARZ REJESTRACJI (Lab 7) --- */}
        <section>
          <MultiStepForm />
        </section>

      </div>
    </ThemeProvider>
  );
}