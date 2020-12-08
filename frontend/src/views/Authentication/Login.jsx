import React, { Component } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ModalForgottenPassword from "../../components/Authentication/ModalForgottenPassword";
import { connect } from "react-redux";
import { login, loginSuccess } from "../../redux/actions";
import loginFetch from "../../utils/authentication/loginFetch";

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {
      email: "",
      password: "",
      alertVisible: false,
      modalVisible: false,
      isFetching: false,
      loginError: false,
    }
  }

  componentDidMount = () => {
    if (window.localStorage.getItem('session') !== null) {
      this.props.history.push("/painel");
    }
  }

  // componentDidUpdate = prevProps => {
  // if(this.props.loginError !== prevProps.loginError){
  //   if(this.props.loginError){
  //     this.setState({
  //       alertVisible: true,
  //       password: ""
  //     });
  //     this.passwordRef.current.value = "";
  //   }
  // }
  // }

  handleEnterKeyDown = event => {
    event.persist();
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  }

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.props.dispatch(login(this.state.email, this.state.password, this.props.history));  
    this.setState({
      loginError: false,
      isFetching: true,
      alertVisible: true,
    });

    loginFetch(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          loginError: false,
          isFetching: false,
          alertVisible: false,
        });
        window.localStorage.setItem('session', this.state.email);
        // window.localStorage.setItem('login-event', 'login' + Math.random());
        this.props.dispatch(loginSuccess(this.state.email));
        this.props.history.push("/painel");
      })
      .catch(() => {
        this.setState({
          loginError: true,
          isFetching: false,
          alertVisible: true,
          password: "",
        });
        this.passwordRef.current.value = "";
      });
  }

  closeAlert = event => {
    this.setState({
      alertVisible: false
    });
  }

  openModal = () => {
    this.setState({
      modalVisible: true
    });
  }

  closeModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Faça login em sua conta.</p>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="email"
                          name="email"
                          innerRef={this.emailRef}
                          placeholder="usuario@senado.leg.br"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                          onKeyDown={this.handleEnterKeyDown}
                          autoFocus
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
                          id="password"
                          name="password"
                          innerRef={this.passwordRef}
                          placeholder="Senha"
                          onChange={this.handleInputs}
                          disabled={this.state.isFetching}
                          onKeyDown={this.handleEnterKeyDown}
                        />
                      </InputGroup>

                      <Row>
                        <Col xs="6">
                          <Button
                            block
                            color="primary"
                            className="px-4"
                            onClick={this.handleSubmit}
                            disabled={this.state.isFetching}
                          >Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button
                            block
                            outline
                            color="primary"
                            className="px-0"
                            onClick={this.openModal}
                            disabled={this.state.isFetching}
                          >Esqueceu sua senha?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Alert
                  className="mt-4 mx-4"
                  color={this.state.loginError ? "danger" : "warning"}
                  isOpen={this.state.alertVisible}
                  toggle={this.closeAlert}
                >{this.state.isFetching ? "Realizando login..." : "Login falhou. Tente novamente."}
                </Alert>

              </Col>
            </Row>
          </Container>
        </div>

        <ModalForgottenPassword
          isOpen={this.state.modalVisible}
          toggle={this.closeModal}
        />

      </React.Fragment>
    );
  }
}

const mapStateToProps = storeState => {
  let isFetching = storeState.auth.isFetching;
  let loginError = storeState.auth.loginError;
  let email = storeState.auth.email;
  return {
    isFetching: isFetching,
    loginError: loginError,
    email: email
  };
}

export default connect(mapStateToProps)(Login);