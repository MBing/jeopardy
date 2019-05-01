import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Category } from './components/Category';

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/category" component={Category} exact />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
