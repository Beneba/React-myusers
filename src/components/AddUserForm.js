import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    // console.log('submitted' ,this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Text>
          <h1>Add Details Here </h1>
        </Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={this.handleChange}
            value ={this.state.name} 
            required
          />
        </Form.Group>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value ={this.state.email}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicGen">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Gen"
              name="gen"
              onChange={this.handleChange}
              value ={this.state.gen}
              required
            />
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddUserForm;
