import React, { Component } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class TeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      cpf: "",
      email: "",
      phone: "",
      cellphone: "",
      personRole: "",
      teamsList: null,
      isFetching: false,
      registerUserError: false,
      alertVisible: false,
      alertMessage: "",
    }
  }

  handleInputs = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  closeAlert = () => {
    this.setState({
      alertVisible: false
    });
  }

  render() {

    const formOptions = gql`
      {
        __type(name: "PersonCategoryType") {
          name
          enumValues {
            name
          }
        }
        allDepartments {
          nodes {
            departmentId
            fullName
          }
        }
      }
    `;

    const newUser = gql`
      mutation MyMutation(
        $email: String!
        $name: String!
        $surname: String!
        $phone: String!
        $department: String!
        $contract: String!
        $category: String!
        $password: String!
        ){
        registerUser(input: {
            inputEmail: $email,
            inputName: $name,
            inputSurname: $surname,
            inputPhone: $phone,
            inputDepartment: $department,
            inputContract: $contract,
            inputCategory: $category,
            inputPassword: $password
        }) {
          person {
            email
          }
        }
      }
    `;

    const mutate = (newData) => {
      newData().then((data) => console.log(data))
    }

    return (
      <Mutation
        mutation={newUser}
        variables={{
          email: this.state.email,
          name: this.state.name,
          surname: this.state.surname,
          phone: this.state.phone,
          department: this.state.department,
          contract: this.state.contract,
          category: this.state.category,
          password: this.state.password1
        }}
      >{(mutation, { data, loading, error }) => {
        if (loading) return null;
        if (error) {
          console.log(error);
        }
        return (
          <Query query={formOptions}>{({ data, loading, error }) => {
            if (loading) return null
            if (error) {
              console.log(error);
              return null
            }

            return (
              <div className="flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="6">
                      <Card className="mx-4">
                        <CardBody className="p-4">
                          <Form
                            onSubmit={event => {
                              event.preventDefault();
                              if (this.state.password1 === this.state.password2) {
                                mutate(mutation);
                              }
                            }}
                          >
                            <h1 className="mb-4">Nova equipe</h1>
                            {/* <p className="text-muted mb-4">Cadastre uma nova usuário do webSINFRA.</p> */}

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-people"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Nome da equipe"
                                onChange={this.handleInputs}
                                disabled={this.state.isFetching}
                                autoFocus
                              />
                            </InputGroup>

                            

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-wrench"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="select"
                                id="personRole"
                                name="personRole"
                                defaultValue=""
                                onChange={this.handleInputs}
                              >
                                <option disabled value="">Nível de acesso ao webSINFRA</option>
                                <option value={'supervisor'}>&emsp;Colaborador da SINFRA</option>
                                <option value={'employee'}>&emsp;Funcionário de contrato de manutenção</option>
                              </Input>
                            </InputGroup>

                            {/* <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-people"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="select"
                                id="team"
                                name="team"
                                defaultValue=""
                                onChange={this.handleInputs}
                              >
                                <option disabled value="">Vincular a uma equipe</option>
                                <option value={'team1'}>&emsp;Equipe 1</option>
                                <option value={'team2'}>&emsp;Equipe 2</option>
                              </Input>
                            </InputGroup> */}

                            <Button
                              color="primary"
                              type="submit"
                              block
                              // onClick={this.handleSubmit}
                              disabled={this.state.isFetching}
                            >Cadastrar usuário
                            </Button>

                          </Form>
                        </CardBody>
                      </Card>

                      <Alert
                        className="mt-4 mx-4"
                        color={this.state.signupError ? "danger" : "warning"}
                        isOpen={this.state.alertVisible}
                        toggle={this.closeAlert}
                      >{this.state.alertMessage}
                      </Alert>

                    </Col>
                  </Row>
                </Container>
              </div>
            )
          }}</Query>
        );
      }}</Mutation>
    );
  }
}

export default TeamForm;