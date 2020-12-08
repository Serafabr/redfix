import React, { Component } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      name: "",
      surname: "",
      phone: "",
      department: "",
      contract: "",
      category: "",
      password1: "",
      password2: "",
      isFetching: false,
      signupError: false,
      alertVisible: false,
      alertMessage: "",
    }
  }

  componentDidMount = () => {
    if(window.localStorage.getItem('session') === null){
      this.props.history.push("/cadastro");
    }
  }

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    

    // DELETE CODE BELOW. USE APOLLO CLIENT WITH REGISTERUSER MUTATION.

    
    // event.preventDefault();
    // this.setState({
    //   isFetching: true,
    //   alertVisible: true,
    //   alertMessage: "Realizando o cadastro...",
    //   signupError: false,
    // });
    // signup(this.state)
    //   .then(() => {
    //     loginFetch(this.state.email, this.state.password1)
    //       .then(() => {
    //         this.props.history.push("/painel")
    //       })
    //       .catch(alertMessage  => {
    //         this.setState({
    //           signupError: true,
    //           isFetching: false,
    //           alertVisible: true,
    //           alertMessage: alertMessage,
    //         })
    //       });
    //   })
    //   .catch(alertMessage => {
    //     this.setState({
    //       signupError: true,
    //       isFetching: false,
    //       alertVisible: true,
    //       alertMessage: alertMessage,
    //     })
    //   })
  }

  closeAlert = () => {
    this.setState({
      alertVisible: false
    });
  }

  render() {

    const email = this.props.email ? this.props.email : window.localStorage.getItem('session');

    return (
      <React.Fragment>

        <div className="flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form>
                      <h1>Perfil</h1>
                      <div>
                        <h3 className="text-muted my-4 text-center">{email}</h3>
                      </div>

                      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Nome"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                          autoFocus
                        />
                      </InputGroup>
                      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="surname"
                          name="surname"
                          placeholder="Sobrenome"
                          onChange={this.handleInputs}
                          innerRef={this.emailInputRef}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>
                      
                      {/* <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="usuario@senado.leg.br"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup> */}

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Telefone"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-briefcase"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="department"
                          name="department"
                          placeholder="Departamento"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-briefcase"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="contract"
                          name="contract"
                          placeholder="Contrato"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-briefcase"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="category"
                          name="category"
                          placeholder="Categoria"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Senha atual"
                          id="password1"
                          name="password1"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Insira nova senha senha"
                          id="password2"
                          name="password2"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Repita a nova senha senha"
                          id="password3"
                          name="password3"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                        />
                      </InputGroup>

                      <Button
                        color="primary"
                        block
                        onClick={this.handleSubmit}
                        disabled={this.state.isFetching}
                        >Salvar alterações
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = storeState => {
  let email = storeState.auth.email;
  return {
    email: email
  };
}

export default connect(mapStateToProps)(Profile);
