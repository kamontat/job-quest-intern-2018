import React, {Component} from 'react';
import Joke from '../models/Joke';

import {fetching} from '../controller/CardController';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: true,
            firstname: "",
            lastname: "",
            numberOfJokes: 1,
            joke: new Joke(),
            jokes: []
        };
    }

    fetch_joke = async(event) => {
        this.reset_state(false);
        let obj = await fetching(this.state.numberOfJokes, this.state.firstname, this.state.lastname);
        let new_state = {
            canSubmit: true
        }
        obj instanceof Array
            ? new_state.jokes = obj
            : new_state.joke = obj
        this.setState(new_state);

        console.log(this.state);
        // Avoid "This synthetic event is reused for performance reasons" error.
        event.persist();
        // event.preventDefault(); this.reset_name(); this.reset_number();
    }

    reset_state = (isSubmit) => {
        this.setState({canSubmit: isSubmit, joke: new Joke(), jokes: []});
    }

    reset_name = () => {
        this.setState({firstname: "", lastname: ""});
    }

    reset_number = () => {
        this.setState({numberOfJokes: 1});
    }

    set_firstname = (event) => {
        this.setState({firstname: event.target.value});
    }

    set_lastname = (event) => {
        this.setState({lastname: event.target.value});
    }

    set_numberjokes = (event) => {
        const nj = (event.target.value > 1)
            ? Number(event.target.value)
            : 1;
        this.setState({numberOfJokes: nj});
    }

    render() {
        const firstname_in = (<input
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={this.set_firstname}/>);
        const lastname_in = (<input
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={this.set_lastname}/>);
        const number_in = (<input
            type="number"
            name="number"
            placeholder="number of jokes"
            onChange={this.set_numberjokes}/>);
        const fetch_bt = (
            <button
                value="Fetch"
                onClick={this.fetch_joke}
                disabled={(!this.state.canSubmit)
                ? "disabled"
                : ""}>Fetch</button>
        );

        let result;

        if (this.state.jokes.length > 1) {
            let list = this
                .state
                .jokes
                .map(joke => (
                    <li key={joke.get_id()}>
                        {joke.get_joke()}
                    </li>
                ))
            result = (
                <ul>
                    {list}
                </ul >
            );
        } else {
            result = (
                <h2>{this
                        .state
                        .joke
                        .get_joke()}
                </h2>
            )
        }

        return (
            <div>
                {firstname_in}
                {lastname_in}
                {number_in}
                {fetch_bt}
                {result}
            </div>
        );
    }
}

export default Card;
