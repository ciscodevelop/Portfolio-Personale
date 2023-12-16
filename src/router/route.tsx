import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/Error/ErrorPage';
import { About, Home, Contact, Project } from '../pages/index';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>,
      },
    ],
  },
]);
