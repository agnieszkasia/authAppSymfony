import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';

class Checkbox extends Component {
    render() {
        const { label, surname, name } = this.state

        return (
            <label>
                {label}:
                <input type='checkbox' name={name} value={surname}/>
            </label>
        )
    }
}

export default Checkbox;