// Interfejs zadania Todo
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// Typy filtrów
export type FilterType = 'all' | 'active' | 'completed';