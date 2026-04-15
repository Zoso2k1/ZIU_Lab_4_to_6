import { Todo } from '../types/todo';

// Definicja akcji dla Todo
export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string } 
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'EDIT_TODO'; payload: { id: string; title: string } };

// Kształt stanu
interface TodoState {
  todos: Todo[];
}

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch(action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: action.payload,
        completed: false
      };
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case 'TOGGLE_TODO': {
      const updated = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos: updated };
    }
    case 'DELETE_TODO': {
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    }
    case 'EDIT_TODO': {
      const updated = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );
      return { ...state, todos: updated };
    }
    default:
      return state;
  }
}
