import React, { Component } from 'react';

class Question extends Component {

    constructor()
    {
        super();

        this.confirm = this.confirm.bind(this);
        this.deny = this.deny.bind(this);
    }

    confirm()
    {
        this.props.answer(true);
    }

    deny()
    {
        this.props.answer(false);
    }

    render()
    {
        const {question} = this.props;

        return (
            <div>
                <h3>{question}</h3>
                <button onClick={this.deny}>NO</button> <button onClick={this.confirm}>YES</button>
            </div>
        );
    }
}

export default Question;
