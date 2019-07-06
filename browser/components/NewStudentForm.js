import React, { Component } from 'react';

export default class NewStudentForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
            //the brackets are computed property naming. Grabs the key
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            firstName: '',
            lastName: '',
            email: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>

                <label>
                    Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label>

                <label>
                    Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>

                <button type="submit">Submit New Student</button>
            </form>
        );
    }
}
