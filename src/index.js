import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import WebFontLoader from 'webfontloader';
import registerServiceWorker from './registerServiceWorker';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

import './index.css';
import App from './components/App';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Signup from './pages/signup/Signup';

function loggedIn() {
    let logInStatus = localStorage.getItem('isLoggedIn');
    if(parseInt(logInStatus) === 1) {
        return true;
    } else {
        return false;
    }
}

function requireAuth(nextState, replaceState) {
    if(!loggedIn()) {
        replaceState('/signup');
    }
}

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} pageName="Home" />
            <Route path="stores" component={Store} pageName="Stores" onEnter={requireAuth} />
            <Route path="signup" component={Signup} pageName="Signup" />
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
