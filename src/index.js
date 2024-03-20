import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Category from './components/Category';
import Details from './components/Details';
import './index.css';
import '@fontsource/montserrat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/categories/:category',
    element: <Category />
  },
  {
    path: '/details/:id',
    element: <Details />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
