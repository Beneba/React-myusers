import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Bless Afetsi",
          email: "bless@email.com",
          gen: 2,
          id: "i4345mnf",
        },
        {
          name: "Ahmed zaky",
          email: "zak@email.com",
          gen: 13,
          id: "brn2n54y",
        },

        {
          name: "Awal Mubarack",
          email: "awal@email.com",
          gen: 2,
          id: "ir456k2i",
        },
      ],
    };
  }

  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  deleteUser = (id) => {
    const undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };
  editUser = (id, updateUser) => {
    this.setState({
      users: this.state.user.map((user) =>
        user.id === id ? updateUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser} />
            </Col>

            <Col>
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
