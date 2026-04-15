import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ margin: '1rem' }}>
      Przełącz na {theme === 'light' ? 'ciemny' : 'jasny'} motyw
    </button>
  );
}
