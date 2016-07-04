import React from 'react';
import cn from 'classnames';

export default class App extends React.Component {
    render() {
        return (
            <div className={cn('app')} id="app">
                {this.props.children}
            </div>
        )
    }
}