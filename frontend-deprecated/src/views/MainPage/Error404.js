import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Error404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">Erro 404</h1>
                <h4 className="pt-3">Ops!</h4>
                <p className="text-muted float-left">Página não encontrada.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Error404;
