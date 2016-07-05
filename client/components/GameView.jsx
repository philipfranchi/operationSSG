import React from 'react';
import cn from 'classnames';

import { init as initGame } from '../../game';

export default class GameView extends React.Component {
    componentDidMount() {
        initGame()
    }

    render() {
        return (
            <div className={cn('gameview')} id="game"> </div>
        )
    }
}