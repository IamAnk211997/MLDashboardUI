import React from 'react';
import { Route, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Landing from '../container/landing/main';
import Analysis from '../container/analysis/main';
import Forecast from '../container/forecast/main';
import Layout from '../layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
      <Route path="Landing" element={<Landing />} />
      <Route path="Analysis" element={<Analysis />} />
      <Route path="Forecast" element={<Forecast />} />
    </Route>
    </>
  )

);

export default router;
