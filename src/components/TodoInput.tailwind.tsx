import React, { useState } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInputTailwind({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Dodaj nowe zadanie</h2>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-lg"
          placeholder="Wpisz treść zadania..."
          value={text} onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
        <button
          className="px-4 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          onClick={handleSubmit}
          disabled={!text.trim()}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}
