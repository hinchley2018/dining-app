import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux stuffs
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './redux/rootReducer';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
