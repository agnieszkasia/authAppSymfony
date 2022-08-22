import React, {Component} from 'react';

class Textarea extends Component {
    static defaultProps = {
        required: false
    }

    state = {
        label: this.props.label,
        value: this.props.value,
        name: this.props.name,
        required: this.props.required,
        error: this.props.error,
        errorText: this.props.errorText
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
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

    render() {
        const { label, name, required, error, errorText } = this.state

        return (
            <label>
                {label}{required?'*':''}
                <textarea className="field" rows="3" name={name} form="form" onChange={this.handleInputChange} required={required}></textarea>
                <div className="error" style={{color: "#ff1e1e", fontSize: "14px", fontWeight: "bold", display: error?"unset":'none'}}>{errorText}</div>
            </label>
        )
    }
}

export default Textarea;