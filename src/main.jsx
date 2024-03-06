import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/index.js';

import { Provider } from 'react-redux';
import rootSaga from './saga/index.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import { StateProvider } from './contexts/StateContext.jsx';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StateProvider>
      <RouterProvider router={router}/>
    </StateProvider>
  </Provider>,
)
