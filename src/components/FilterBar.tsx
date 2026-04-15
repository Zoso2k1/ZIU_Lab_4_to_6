import React from 'react';
import { FilterType } from '../types/todo';

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'Wszystkie', value: 'all' },
    { label: 'Aktywne',  value: 'active' },
    { label: 'Ukończone',value: 'completed' }
  ];
  return (
    <div style={{ margin: '1rem 0' }}>
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          style={{
            marginRight: '0.5rem',
            fontWeight: activeFilter === f.value ? 'bold' : 'normal'
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

