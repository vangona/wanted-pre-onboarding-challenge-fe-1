import React from 'react';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '@components/common/ProtectedRoute';
import Auth from '@routes/Auth';
import Home from '@routes/Home';
import GlobalStyle from '@styles/Global.style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import checkIsValidToken from '@utils/checkIsValidToken';
import getUserToken from '@utils/getUserToken';
import { Reset } from 'styled-reset';
import DailyscrumGroups from '@routes/DailyscrumGroups';

const App = () => {
  const userToken = getUserToken();
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={
            <ProtectedRoute
              condition={checkIsValidToken(userToken)}
              validRoute={<Home />}
              invalidTo='/auth'
            />
          }
          errorElement='에러가 발생했어용'
        />
        <Route
          path='/auth'
          element={
            <ProtectedRoute
              condition={!checkIsValidToken(userToken)}
              validRoute={<Auth />}
              invalidTo='/'
            />
          }
          errorElement='에러가 발생했어용'
        />
        <Route path='/dailyscrum/groups' element={<DailyscrumGroups />} />
      </>,
    ),
  );

  return (
    <>
      <Reset />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
