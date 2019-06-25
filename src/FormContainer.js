import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      isChecked: true,
      gender: '',
      location: '',
      dietaryRestrictions: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('Handling Change..');
    const { name, value, checked } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <FormComponent
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        age={this.state.age}
        isChecked={this.state.isChecked}
        gender={this.state.gender}
        location={this.state.location}
        handleChange={this.handleChange} />
    )
  }
}


export default FormContainer;