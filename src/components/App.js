import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pickCategory, setCategories } from '../actions';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../api';

export class AppContainer extends Component {
    componentDidMount() {
        if (!Boolean(this.props.categories.length)) {
            fetch(BASE_URL + 'categories?count=20')
                .then(response => response.json())
                .then(categories => this.props.setCategories(categories));
        }
    }

    render() {
        return (
            <div>
                <h2>Jeopardy!</h2>
                {this.props.categories.map(category => {
                    return (
                        <div key={category.id}>
                            <Link
                                to="/category"
                                onClick={() =>
                                    this.props.pickCategory(category)
                                }
                            >
                                <h4>{category.title}</h4>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const App = connect(
    mapStateToProps,
    { setCategories, pickCategory }
)(AppContainer);

export { App };
