import React, { Component } from 'react';

class Clue extends Component {
    constructor() {
        super();

        this.state = {
            isHidden: true,
        };
    }
    render() {
        const { question, answer, value } = this.props.clue;
        return (
            <div
                className="clue"
                onClick={() =>
                    this.setState({ isHidden: !this.state.isHidden })
                }
            >
                <h4>{value || 'unknown'}</h4>
                <hr />
                <h5>{question}</h5>
                <hr />
                <h5 className={this.state.isHidden ? 'isHidden' : ''}>
                    {answer}
                </h5>
            </div>
        );
    }
}

export { Clue };
