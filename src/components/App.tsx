import React from 'react';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import useToken from '@hooks/useToken';
import Auth from '@routes/Auth';
import Home from '@routes/Home';

const App = () => {
  const userToken = useToken();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home userToken={userToken} />} />
        <Route path='/auth' element={<Auth userToken={userToken} />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
