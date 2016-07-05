import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import GameView from './components/GameView'

export default (
    <Route name='app' path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='game' component={GameView} />
    </Route>
)