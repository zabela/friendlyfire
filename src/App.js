import React, {Component} from 'react';
import Intro from './Intro';
import Question from './Question';
import Result from './Result';
import './App.css';
import Proof from "./Proof";

class App extends Component {
    state = {
        qn: 0,
        showProof: false,
        profile: {
            gender: "male",
            name: "Bond",
            location: "London",
            friend: "Max",
            activity: "skydiving",
            employer: "MI6"
        },
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
        this.answer = this.answer.bind(this);
        this.updateFriend = this.updateFriend.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
        this.updateEmployer = this.updateEmployer.bind(this);
    }

    nextQuestion()
    {
        const nextQn = this.state.qn === 5 ? 0 : this.state.qn + 1;
        this.setState({
            qn: nextQn,
            showProof: false
        });
    }

    answer(truth)
    {
        if (truth)
        {
            const nextQn = this.state.qn + 1;
            this.setState({
                qn: nextQn
            });
        }
        else
        {
            this.setState({
                showProof: true
            });
        }
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
        const {qn, showProof, profile} = this.state;

        let content;
        let question;
        const proof = "./detector.png"; // TODO
        if (showProof)
        {
            content = <Proof okay={this.nextQuestion}/>;
        }
        else {
            switch (qn) {
                case 0:
                    content = (
                        <Intro update={this.nextQuestion}
                               gender={profile.gender}
                               name={profile.name}
                        />
                    );
                    break;
                case 1:
                    question = "Have you ever been in " + profile.location + "?";
                    content = (
                        <Question answer={this.answer}
                                  question={question}
                        />
                    );
                    break;
                case 2:
                    question = "Has " + profile.friend + " joined your mission?";
                    content = (
                        <Question answer={this.answer}
                                  question={question}
                        />
                    );
                    break;
                case 3:
                    question = "Have you done " + profile.activity + " there?";
                    content = (
                        <Question answer={this.answer}
                                  question={question}
                        />
                    );
                    break;
                case 4:
                    question = "Are you working for " + profile.employer + "?";
                    content = (
                        <Question answer={this.answer}
                                  question={question}
                        />
                    );
                    break;
                case 5:
                    content = (
                        <Result update={this.nextQuestion}
                                profile={profile}
                        />
                    );
                    break;
            }
        }

        return (
            <div className="App">
                <header className="App-header">
                    {showProof ? <img src={proof} alt="Proof"/> : <img src="./detector.png" alt="detector"/>}
                </header>
                {content}
            </div>
        );
    }
}

export default App;
