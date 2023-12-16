import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { router } from './router/route.tsx';
import { RouterProvider } from 'react-router-dom';
import './sass/index.scss'
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>,
);
