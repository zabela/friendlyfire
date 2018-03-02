import React, { Component } from 'react';

export default class Intro extends Component {

    render()
    {
        const username = "Bond"; // TODO
        return (
            <div>
                <h3>Hello agent {username}</h3>
                <button onClick={this.props.update}>Start</button>
            </div>
        );
    }
}
