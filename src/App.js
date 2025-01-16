import Content from './Content'
import { useState, createContext } from 'react'
import './App.css';

// Context
// CompA => CompB => CompC

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <button
          onClick={handleTheme}
        >
          Toggle theme
        </button>

        <Content />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;