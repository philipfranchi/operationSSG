import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

export default class Home extends React.Component {
    render() {
        return (
            <div className={cn('home')}>
                <p> Hello World! </p>
                <Link to='/game'>GAME TIME</Link>
            </div>
        )
    }
}