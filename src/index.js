import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorElement from './components/ErrorElement';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CardPage from './pages/CardPage';
import App from './App';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import PdpPage from './pages/PdpPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorElement/>,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/card",
        element:<CardPage/>
      },
      {
        path:"/pdp",
        element:<PdpPage/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


