import React, {Component} from 'react';

class Select extends Component {
    static defaultProps = {
        required: false
    }

    state = {
        options: [
            {
                value: 'tester',
                label: 'Tester'
            },
            {
                value: 'developer',
                label: 'Developer'
            },
            {
                value: 'projectManager',
                label: 'Project Manager'
            }
        ],
        name: this.props.name,
        label: this.props.label,
        id: this.props.id,
        onChange: this.props.onChange,
        required: this.props.required
    }


    render() {
        const { label, name, id, options, onChange, required } = this.state

        return (
            <label>
                {label}{required?'*':''}
                <select name={name} id={id} onChange={onChange} className="field" required={required}>
                    <option value="">-</option>
                    {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
                </select>
            </label>
        )
    }
}

export default Select;