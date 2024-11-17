import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Homepage } from './components/pages/Homepage';
import { UserListPage } from './components/pages/UserListPage';
import { ThemeFormPage } from './components/pages/ThemeFormPage';
import { UserDetailPage } from './components/pages/UserDetailPage';
import { userDetailLoader } from './components/UserDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <Homepage />
    }, {
      path: '/user-list',
      element: <UserListPage />
    },
    {
      path: '/theme-form',
      element: <ThemeFormPage />
    },
    {
      path: '/user/:id',
      element: <UserDetailPage />,
      loader: userDetailLoader
    }
    ]
  }
]);

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
