// provider component that is made by the react-redux library
// its a named export and is a compoenent and is capitalized
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

// we need to wrap the App with a provider
// you then pass the provider component a single prop called store
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root')
)
