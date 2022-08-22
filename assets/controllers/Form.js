import React, {Component} from 'react';
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import AdditionalFields from "../components/AdditionalFields";

class Form extends Component{
    componentDidMount = () => {
        const fields = []
        this.setState({fields})

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = {
        fields: [],
    }

    state = {
        fields: this.props.fields,
    }

    changeFields = async event => {
        const position = event.target.value

        let fieldsArray = [];
        if (position === 'tester') {
            fieldsArray = [
                {type: 'input', name: 'testingSystems', label: 'Systemy testujące'},
                {type: 'input', name: 'reportSystems', label: 'Systemy raportowe'},
                {type: 'checkbox', name: 'selenium', label: 'Zna Selenium'}
            ]
        } else if (position === 'developer') {
            fieldsArray = [
                {type: 'input', name: 'ide', label: 'środowiska ide'},
                {type: 'input', name: 'languages', label: 'Języki programowania'},
                {type: 'checkbox', name: 'mysql', label: 'Zna MySQL'}
            ]
        } else if (position === 'projectManager') {
            fieldsArray = [
                {type: 'input', name: 'projectMethods', label: 'metodologie prowadzenia projektów'},
                {type: 'input', name: 'reportSystems', label: 'systemy raportowe'},
                {type: 'checkbox', name: 'scrum', label: 'Zna Scrum'}
            ]
        }
        await this.removeAll(event)

        this.setState({
            fields: fieldsArray,
        })
    }

    removeAll = async (event) => {
        event.preventDefault();

        await this.setState({
            fields: []
        })
    }

    handleSubmit (event) {
        event.preventDefault();

        var formData = new FormData(event.target);
        var data = {};

        for (var [key, value] of formData.entries()) {
            data[key] = value
        }

        fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            dataType: 'JSON',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok == true) {
                alert('Zarejestrowano!');
            } else {
                alert('Nie udało się zarejestrować!');
            }
        });
    }

    render() {
        const options = this.state.options
        const { fields } = this.state

        return (
            <form onSubmit={ this.handleSubmit } id="form" style={{background: '#2b2b2b', margin: '0 auto', width: '80%', maxWidth: '600px', padding: '14px', borderRadius: '14px', marginTop: '14px'}}>
                <Input type={'text'} name={'name'} value={''} label={'Imię'} required={true}/>
                <Input type={'text'} name={'surname'} value={''} label={'Nazwisko'} required={true}/>
                <Input type={'text'} name={'email'} value={''} label={'Email'} required={true} regex={'\\S+@\\S+\\.\\S+'} />
                <Textarea name={'description'} value={''} label={'Opis'}/>
                <Select options={options} name={'position'} value={''} label={'Stanowisko'} onChange={this.changeFields.bind(this)} required={true}/>
                <AdditionalFields fields={fields}/>
                <Button />
            </form>
        )
    }
}

export default Form;