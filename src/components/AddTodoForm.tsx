import React, { useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  // TODO 1: Deklaracja stanu inputValue
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO 2: Walidacja i wywołanie onAdd
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Co masz do zrobienia?"
        style={{ padding: '8px', marginRight: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Dodaj</button>
    </form>
  );
}