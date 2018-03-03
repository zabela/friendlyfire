import React, { Component } from 'react';

class Proof extends Component {
    render()
    {
        const {okay} = this.props;

        return (
            <div>
                <h3>But we have proof...</h3>
                <button onClick={okay}>OK, it's me</button>
            </div>
        );
    }
}

export default Proof;
