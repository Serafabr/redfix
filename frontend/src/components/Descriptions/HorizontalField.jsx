import React, { Component } from 'react';

export default class HorizontalField extends Component {
  state = {}
  render() {
    const { boldTitle, title, description } = this.props;
    return (
      <Row>
        <Col md="3" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}><span className={boldTitle ? "desc-name" : "desc-sub"}>{title}</span></Col>
        <Col md="9" style={{ display: "flex", alignItems: "center" }}><span>{description || "Não cadastrado"}</span></Col>
      </Row>
    );
  }
}