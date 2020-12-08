import React, { Component } from 'react';
import './TextField.css';

export default class TextField extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="asset-info-single-container">
        <div className="desc-sub">{title}</div>
        <div className="asset-info-content-data">{description || "Não cadastrado"}</div>
      </div>
    );
  }
}