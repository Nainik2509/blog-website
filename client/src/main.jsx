import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/home/Home.jsx';
import SingleBlog from './pages/blogs/SingleBlog.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs/:id',
        element: <SingleBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);

