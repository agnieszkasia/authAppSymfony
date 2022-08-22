import React, {Component} from 'react';
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Button from "./Button";
import AdditionalFields from "./AdditionalFields";

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
                {type: 'input', name: 'testingSystems', label: 'systemy testujące'},
                {type: 'input', name: 'reportSystems', label: 'systemy raportowe'},
                {type: 'checkbox', name: 'selenium', label: 'zna selenium'}
            ]
        } else if (position === 'developer') {
            fieldsArray = [
                {type: 'input', name: 'ide', label: 'środowiska ide'},
                {type: 'input', name: 'languages', label: 'języki programowania'},
                {type: 'checkbox', name: 'mysql', label: 'zna mysql'}
            ]
        } else if (position === 'projectManager') {
            fieldsArray = [
                {type: 'input', name: 'projectMethods', label: 'metodologie prowadzenia projektów'},
                {type: 'input', name: 'reportSystems', label: 'systemy raportowe'},
                {type: 'checkbox', name: 'scrum', label: 'zna scrum'}
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
        console.log(formData.entries())
        for (var [key, value] of formData.entries()) {
            data[key] = value
        }

        const response =  fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            dataType: 'JSON',
            body: JSON.stringify(data) // Attach body with the request
        });
    }


    render() {
        const options = this.state.options
        const { fields } = this.state

        return (
            <form onSubmit={ this.handleSubmit } id="form" style={{background: '#2b2b2b', margin: '0 auto', width: '80%', maxWidth: '600px', padding: '14px', borderRadius: '14px', marginTop: '14px'}}>
                <Input type={'text'} name={'name'} value={''} label={'Imię'} required={true}/>
                <Input type={'text'} name={'surname'} value={''} label={'Nazwisko'} required={true}/>
                <Input type={'text'} name={'email'} value={''} label={'Email'} required={true} />
                <Textarea name={'description'} value={''} label={'Opis'}/>
                <Select options={options} name={'position'} value={''} label={'Stanowisko'} onChange={this.changeFields.bind(this)}/>
                <AdditionalFields fields={fields}/>
                <Button />
            </form>
        )
    }
}

export default Form;