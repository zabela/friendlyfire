import React, { Component } from 'react';

class Result extends Component {

    render() {
        const {friend, user, location, month, year, activity, employer} = this.props;

        return (
            <div>
                <h4>
                    {friend}, you have been burned!<br/>
                    {user} has told us what you did on your mission to {location} in {month}, {year} when you were doing {activity} for {employer}.
                </h4>
                <button onClick={this.props.update}>Start again</button>
            </div>
        );
    }
}

export default Result;
