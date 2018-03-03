import React, { Component } from 'react';

class Result extends Component {

    render() {
        const {friend, name, location, activity, employer} = this.props.profile;

        return (
            <div>
                <h4>
                    {friend}, you have been burned!<br/>
                    {name} has told us what you did on your mission to {location} when you were doing {activity} for {employer}.
                </h4>
                <button onClick={this.props.update}>Start again</button>
            </div>
        );
    }
}

export default Result;
