import './assets/css/bootstrap.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/animate.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/lightbox.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/fonts/font-awesome/font-awesome.min.css';
import 'react-image-lightbox/style.css';
import 'reflect-metadata';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
