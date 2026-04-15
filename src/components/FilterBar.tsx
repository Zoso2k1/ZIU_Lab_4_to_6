import { FilterType } from '/src/assets/types/todo.types';

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'active', label: 'Aktywne' },
    { value: 'completed', label: 'Ukończone' },
  ];

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          style={{
            fontWeight: activeFilter === f.value ? 'bold' : 'normal',
            border:
              activeFilter === f.value ? '2px solid #007bff' : '1px solid #ccc',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
