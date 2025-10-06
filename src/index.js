import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';
import NoPage from './components/NoPage/NoPage';
import Contact from './components/ContactForm/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router1 = createBrowserRouter([
  {
    path: "/ledgymedia",
    element: <App/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/*",
    element: <NoPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router1} />
      {/* <App/> */}
  </React.StrictMode>
);

