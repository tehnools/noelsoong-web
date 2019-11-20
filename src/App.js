import React, { createContext } from 'react';
import './App.css';
import BioCard from "./components/BioCard";

const Theme = {
  primary: '',
  secondary: '',
  link: {
    default: this.secondary
    visited: ''
  }
}
export const ThemeContext = createContext(Theme)

function App() {
  return (
    <ThemeContext.Provider>
    <div className="App">
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
