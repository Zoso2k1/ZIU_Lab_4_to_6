import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import { TodoState, TodoAction } from '../types/todo';

interface TodoContextType {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}

// TODO 5a: Utworzenie kontekstu (poprawiono nazwę z ThemeContext na TodoContext)
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  // TODO 5b: Opakowanie w Provider
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// TODO 5c: Custom hook useTodoContext
export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return ctx;
};