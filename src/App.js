import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: [
        {
          name: "Bless Afetsi",
          email: "bless@email.com",
          gen : 2
        }, 
        {
          name: "Ahmed zaky",
          email: "zak@email.com",
          gen : 13
        },
    
        {
          name: "Awal Mubarack",
          email: "awal@email.com",
          gen : 2
        }
      ]
    }
  }

  addNewUser =(user) =>{
    this.setState({
      users: [...this.state.users, user ]
    })
  }

  render() {
    return (
      <>
        <Container fluid style = {{marginTop:"2rem"}} >
          <Row>
            <Col md="4" >
              <AddUserForm  addUser ={this.addNewUser}/>
            </Col>
              
            <Col>
              <Users  usersData = {this.state.users} />
            </Col>
          </Row>
  
        </Container>
        
      </>
    );
  
  }
}

export default App;
