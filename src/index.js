import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import todoSaga from './sagas/todoSaga'

import { Provider } from 'react-redux';
import { todosReducer } from './reducers/todoReducer';
import { initState } from './initState';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    todosReducer, 
    initState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
