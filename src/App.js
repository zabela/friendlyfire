import React, {Component} from 'react';
import Intro from './Intro';
import Question from './Question';
import Result from './Result';
import './App.css';

class App extends Component {
    state = {
        qn: 0,
        friend: undefined,
        location: undefined,
        month: undefined,
        year: undefined,
        activity: undefined,
        employer: undefined
    };

    constructor()
    {
        super();

        this.nextQuestion = this.nextQuestion.bind(this);
        this.updateFriend = this.updateFriend.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
        this.updateEmployer = this.updateEmployer.bind(this);
    }

    nextQuestion()
    {
        const nextQn = this.state.qn === 5 ? 0 : this.state.qn + 1;
        this.setState({
            qn: nextQn
        });
    }

    updateFriend(friend)
    {
        const nextQn = this.state.qn + 1;
        this.setState({
            qn: nextQn,
            friend: friend
        });
    }

    updateLocation(location)
    {
        const nextQn = this.state.qn + 1;
        this.setState({
            qn: nextQn,
            location: location
        });
    }

    updateActivity(activity)
    {
        const nextQn = this.state.qn + 1;
        this.setState({
            qn: nextQn,
            activity: activity
        });
    }

    updateEmployer(employer)
    {
        const nextQn = this.state.qn + 1;
        this.setState({
            qn: nextQn,
            employer: employer
        });
    }

    render()
    {
        let content;
        switch (this.state.qn)
        {
            case 0:
                content = <Intro update={this.nextQuestion}/>;
                break;
            case 1:
                content = (
                    <Question update={this.updateLocation}
                              question={"Have you ever been in {location}?"}
                    />
                );
                break;
            case 2:
                content = (
                    <Question update={this.updateFriend}
                              question={"Has {friend} joined your mission?"}
                    />
                );
                break;
            case 3:
                content = (
                    <Question update={this.updateActivity}
                              question={"Have you done {activity} there?"}
                    />
                );
                break;
            case 4:
                content = (
                    <Question update={this.updateEmployer}
                              question={"Are you working for {employer}?"}
                    />
                );
                break;
            case 5:
                content = <Result update={this.nextQuestion}/>;
                break;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src="./detector.png" alt="detector"/>
                    <h1 className="App-title">Friendly Fire</h1>
                </header>
                {content}
            </div>
        );
    }
}

export default App;
