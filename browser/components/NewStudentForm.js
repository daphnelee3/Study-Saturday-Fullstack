import React from 'react';


class NewStudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: '',
            Lastname: '',
            Email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        this.setState = ({
            Firstname: '',
            Lastname: '',
            Email: ''
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='Firstname'>Firstname</label>
                <input type='text' name='Firstname' value={this.state.Firstname} onChange={this.handleChange} />

                <label htmlFor='Lastname'>Lastname</label>
                <input type='text' name='Lastname' value={this.state.Lastname} onChange={this.handleChange} />

                <label htmlFor='Email'>Email</label>
                <input type='text' name='Email' value={this.state.Email} onChange={this.handleChange} />

                <button type='submit'>Submit</button>
            </form >
        )
    }
}

export default NewStudentForm