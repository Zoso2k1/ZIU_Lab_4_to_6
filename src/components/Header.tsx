import React from 'react';

interface HeaderProps {
  activeCount: number;
  totalCount: number;
}

export default function Header({ activeCount, totalCount }: HeaderProps) {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h1>Moja lista zadań</h1>
      <p>Zadania aktywne: {activeCount} / {totalCount}</p>
    </header>
  );
}
