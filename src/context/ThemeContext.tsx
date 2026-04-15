import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Można wprowadzić dodatkowy styl globalny w zależności od motywu */}
      <div style={{ 
        backgroundColor: theme === 'light' ? '#fff' : '#222', 
        color: theme === 'light' ? '#000' : '#eee',
        minHeight: '100vh'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Hook pomocniczy do używania kontekstu
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
