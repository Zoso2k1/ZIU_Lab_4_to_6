import { Todo, TodoAction, TodoState } from '../types/todo';

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD':
      // TODO 4a: Akcja ADD
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: new Date(),
      };
      return { ...state, todos: [newTodo, ...state.todos] };

    case 'TOGGLE':
      // TODO 4b: Akcja TOGGLE
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case 'DELETE':
      // TODO 4c: Akcja DELETE
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };

    default:
      return state;
  }
};