import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxPromise  from 'redux-promise';
import './index.css';
import App from './components/app';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


//  ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
