import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm.js'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      displayForm: false
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  toggleFormDisplay() {
    this.setState({ displayForm: !this.state.displayForm });
    console.log(this.state.displayForm, "HI")
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <div>
          <button onClick={this.toggleFormDisplay} type="submit">Add New Student</button>
          {this.state.displayForm ? <NewStudentForm /> : null}
          {/* same as this.state.displayForm && <NewStudentForm /> */}
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
