import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import { reducer } from './redux/reducer'; 

import App from './components/App/App';
import "./styles/index.scss";


const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);