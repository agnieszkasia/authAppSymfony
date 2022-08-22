import React, {Component} from 'react';

class Checkbox extends Component {
    state = {
        name: this.props.name,
        label: this.props.label
    }

    render() {
        const { name, label } = this.state

        return (
            <label>
                {label}
                <input type='checkbox' name={name} />
            </label>
        )
    }
}

export default Checkbox;