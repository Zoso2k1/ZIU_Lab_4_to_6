import { useState } from "react";
import { useTodoContext } from "./context/TodoContext";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

type FilterType = 'all' | 'active' | 'completed';

function App() {
  const { state, dispatch } = useTodoContext();
  const [filter, setFilter] = useState<FilterType>('all');

  const handleAdd = (text: string) => {
    dispatch({ type: 'ADD', payload: text });
  };

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  // TODO 3: Brakujące przypadki filtru
  const filteredTodos = state.todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Lista Zadań (Lab 4)</h1>
      
      <AddTodoForm onAdd={handleAdd} />

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>Wszystkie</button>
        <button onClick={() => setFilter('active')} disabled={filter === 'active'}>Aktywne</button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Ukończone</button>
      </div>

      <TodoList 
        todos={filteredTodos} 
        onToggle={handleToggle} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default App;