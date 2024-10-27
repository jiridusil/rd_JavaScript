import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/ProductList';
import { AddProduct } from './components/AddProduct';

function App() {
  const [localStorageProducts, setLocalStorageProducts] =
    useState<string>(localStorage.getItem('products') || '[]');
  return (
    <div>

      <ProductList localStorageProducts={localStorageProducts} />
      <AddProduct updateProducts={setLocalStorageProducts} />
    </div>
  );
}

export default App;
