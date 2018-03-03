import React, { Component } from 'react';

class Intro extends Component {

    render()
    {
        const {gender, name} = this.props;

        return (
            <div>
                <h3>Hello {gender ? "Mr" : "Ms"} {name}, it seems you have been living a double life...</h3>
                <button onClick={this.props.update}>Let's start with the interrogation</button>
            </div>
        );
    }
}

export default Intro;
