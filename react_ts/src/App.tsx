import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/ProductList';
import { AddProductForm } from './components/AddProductForm';
import { ThemeContext } from './components/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher setTheme={setTheme} />
      <AddProductForm />
      <ProductList />
    </ThemeContext.Provider>
  );
}

export default App;
