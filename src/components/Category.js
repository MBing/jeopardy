import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BASE_URL } from '../api';
import { Clue } from './Clue';

export class CategoryContainer extends Component {
    constructor() {
        super();

        this.state = {
            clues: [],
        };
    }
    componentDidMount() {
        if (Boolean(this.props.category)) {
            fetch(`${BASE_URL}clues?category=${this.props.category.id}`)
                .then(response => response.json())
                .then(clues => this.setState({ clues }));
        }
    }

    render() {
        const { title } = this.props.category;
        return (
            <div>
                <h2>{title}</h2>
                {this.state.clues.map(clue => (
                    <Clue key={clue.id} clue={clue} />
                ))}
            </div>
        );
    }
}

export class LinkedCategory extends Component {
    render() {
        return (
            <div>
                <Link to="/" className="link-home">
                    <h4>Home</h4>
                </Link>
                <CategoryContainer category={this.props.category} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    category: state.category,
});

const Category = connect(
    mapStateToProps,
    null
)(LinkedCategory);

export { Category };
