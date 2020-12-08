import React, { Component } from "react";
import {
  Alert,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Container,
  Col,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class ModalForgottenPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      emailOK: false,
      code: "",
      newPassword1: "",
      newPassword2: "",
      newPasswordOK: false,
      alertVisible: false
    }
  }

  // handleChangeInputs = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  // requestCode = event => {
  //   event.preventDefault();
  //   forgotCognito(this.state.email).then(response => {
  //     if(response){
  //       this.setState({
  //         alertVisible: false,
  //         emailOK: true
  //       });
  //     } else {
  //       this.setState({
  //         alertVisible: true,
  //         emailOK: false
  //       });
  //     }
  //   });
  // }

  // handleNewPassword = event => {
  //   event.preventDefault();
  //   setNewPasswordCognito(this.state.email, this.state.code, this.state.newPassword1, this.state.newPassword2).then(response => {
  //     if(response){
  //       this.setState({
  //         alertVisible: true,
  //         newPasswordOK: true
  //       });
  //     } else {
  //       this.setState({
  //         alertVisible: true,
  //         newPasswordOK: false
  //       });
  //     }
  //   });
  // }

  // closeAlert = event => {
  //   this.setState({
  //     alertVisible: false
  //   });
  // }
  
  render() {

    let {
      toggle,
      isOpen
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-md"
      >
        <ModalHeader toggle={toggle}>
          <Row style={{ padding: "0px 20px" }}>
            <div className="widget-title">
              <h4>
                Esqueci minha senha
              </h4>
            </div>
          </Row>
        </ModalHeader>
        <ModalBody style={{ overflow: "scroll", alignContent: "center" }}>
          <div className="flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="12">
                  <div className="p-4 text-center">

                    {!this.state.emailOK && !this.state.newPasswordOK &&
                      <React.Fragment>
                        <Form>
                          {/* <p className="text-muted">
                            Insira seu email no campo abaixo para solicitar o código de verificação e cadastrar uma nova senha.
                          </p> */}

                          <p className="text-muted">
                            Funcionalidade ainda não disponível. Por favor, entre em contato com o SEPLAG.
                          </p>


                          {/* <InputGroup className="mb-4 mt-3">
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
                              onChange={this.handleChangeInputs}
                            />
                          </InputGroup>
                          <Button
                            block
                            type="submit"
                            size="md"
                            color="primary"
                            onClick={this.requestCode}
                          >Solicitar código de verificação
                          </Button> */}
                        </Form>

                        <Alert className="mt-4 mx-4" color="danger" isOpen={this.state.alertVisible} toggle={this.closeAlert}>
                          Não foi possível enviar o código de verificação.
                        </Alert>

                      </React.Fragment>
                    }

                    {this.state.emailOK && !this.state.newPasswordOK &&
                      <React.Fragment>
                        <p className="text-muted">
                          Insira o código de verificação que foi enviado para o email
                          <strong>{" " + this.state.email + " "}</strong>
                          e defina a nova senha.
                        </p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-exclamation-triangle"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            id="code"
                            name="code"
                            placeholder="Código de verificação (XXXXXX)"
                            onChange={this.handleChangeInputs}  
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
                            id="newPassword1"
                            name="newPassword1"
                            placeholder="Nova senha"
                            onChange={this.handleChangeInputs}  
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
                            id="newPassword2"
                            name="newPassword2"
                            placeholder="Repita a nova senha"
                            onChange={this.handleChangeInputs}  
                          />
                        </InputGroup>

                        <Button
                          block
                          type="submit"
                          size="md"
                          color="primary"
                          onClick={this.handleNewPassword}
                        >Atualizar senha
                        </Button>

                        <Alert className="mt-4 mx-4" color="danger" isOpen={this.state.alertVisible} toggle={this.closeAlert}>
                          Não foi possível atualizar a senha. Tente novamente
                        </Alert>

                      </React.Fragment>
                    }

                    {this.state.emailOK && this.state.newPasswordOK &&
                      <Alert className="mt-4 mx-4" color="success" isOpen={this.state.alertVisible}>
                        Nova senha cadastrada com sucesso!
                      </Alert>
                    }
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalForgottenPassword;
