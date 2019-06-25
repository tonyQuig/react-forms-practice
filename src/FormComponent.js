import React from 'react';

function FormComponent(props) {
    console.log('Props: ', props);
    return (
        <main>
          <form>
            <input type="text" value={props.firstName} name="firstName" onChange={props.handleChange} placeholder="First Name" /> <br />
            <input type="text" value={props.lastName} name="lastName" onChange={props.handleChange} placeholder="Last Name" /> <br />
            <input type="text" value={props.age} name="age" onChange={props.handleChange} placeholder="Age" /> <br />
  
            <br />
  
            <input
              type="radio"
              checked={props.gender === 'male'}
              value='male'
              name="gender"
              onChange={props.handleChange} />
            Male
  
            <br />
  
            <input
              type="radio"
              checked={props.gender === 'female'}
              value='female'
              name="gender"
              onChange={props.handleChange} />
            Female
  
            <br />
  
            <select
              value={props.location}
              name="location"
              onChange={props.handleChange}
              placeholder='Location'>
              <option value="Belfast">Belfast</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
            </select>  
          </form>
  
          <h1>
            Entered Information:
          </h1>
          <p>First Name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Age: {props.age}</p>
          <p>Gender: {props.gender}</p>
          <p>Location: {props.location}</p>
        </main>
  
      )
}

export default FormComponent;