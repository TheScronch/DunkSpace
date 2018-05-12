import React from 'react';
import Form from './Form/Form';
import './FormContainer.css';

class FormContainer extends React.Component{
  constructor( props ) {
    super(props);
    this.state = {
      postSubject: "",
      postBody: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addPost( { subject: this.state.postSubject, body: this.state.postBody } );
    this.setState({
      postSubject: "",
      postBody: ""  
    });
  }

  handleInputChange = (event) => {
    const tValue = event.target.value;
    const tName = event.target.name;

    console.log("INPUT");

    this.setState({
      [tName]: tValue
    });
  }

  render(){
    return (
      <Form 
        postSubject={this.state.postSubject}
        postBody={this.state.postBody}
        change={this.handleInputChange}
        submit={this.onSubmit}/>
    )
  }
}
export default FormContainer;