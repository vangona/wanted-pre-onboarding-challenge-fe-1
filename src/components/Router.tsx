import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Auth from '@routes/Auth';
import Home from '@routes/Home';
import Todos from '@routes/Todos';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/todos' element={<Todos />} />
    </>,
  ),
);

export default Router;
