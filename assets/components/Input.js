import React, {Component} from 'react';

class Input extends Component {
    static defaultProps = {
        required: false,
    }

    state = {
        type: this.props.type,
        label: this.props.label,
        value: this.props.value,
        name: this.props.name,
        required: this.props.required,
        error: this.props.error,
        errorText: this.props.errorText,
        regex: this.props.regex
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const required = target.required;

        if (required && value === '') {
            this.setState({
                error: true,
                errorText: 'Pole nie może byc puste'
            })
        } else {
            this.setState({
                error: false
            })
        }

        this.setState({
            value: value
        });
    };

    handleDivBlur  = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'email' && value !== "") {
            const regex = new RegExp(/\S+@\S+\.\S+/);
            if (!regex.test(value)){
                this.setState({
                    error: true,
                    errorText: 'Podany email jest nieprawidłowy'
                })
            }
        }
    };

    render() {
        const { label, value, type, name, required, error, errorText, regex } = this.state

        return (
            <label>
                {label}{required?'*':''}
                <input className="field" type={type} name={name} onChange={this.handleInputChange}
                       onBlur={this.handleDivBlur} value={value} required={required} pattern={regex}/>
                <div className="error" style={{color: "#ff1e1e", fontSize: "14px", fontWeight: "bold", display: error?"unset":'none'}}>
                    {errorText}
                </div>
            </label>
        )
    }
}

export default Input;