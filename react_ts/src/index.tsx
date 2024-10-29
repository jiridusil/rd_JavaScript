import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { ProductListPage } from './pages/ProductListPage';
import { Homepage } from './pages/Homepage';
import { AddProductPage } from './pages/AddProductPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/product-list',
    element: <ProductListPage />
  },
  {
    path: '/add-product',
    element: <AddProductPage />
  },
])

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
