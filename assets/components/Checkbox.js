import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        alert('Podano następujące imię: ' + this.state.value);
        alert('Podano następujące imię: ' + this.state.value);
        //tutaj odwołanei do dodawania użytkownika do bazy
        event.preventDefault();
    }
    render() {
        return (
            <form>
                <label>
                    Imię:
                    <input type='text' name="name" onChange={this.handleChange} value={name}/>
                </label>
                <label>
                    Nazwisko:
                    <input type='text' name="surname" onChange={this.handleChange} value={surname}/>
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        )
    }
}

export default Form;