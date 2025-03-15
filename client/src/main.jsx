import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import './index.css';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);

