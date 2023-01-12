import React from 'react';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Auth from '@routes/Auth';
import Home from '@routes/Home';
import GlobalStyle from '@styles/Global.style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Reset } from 'styled-reset';

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </>,
    ),
  );

  return (
    <>
      <Reset />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
