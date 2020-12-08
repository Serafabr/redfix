import React, { Component } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import {
  Row,
  Col,
} from 'reactstrap';

class LocationForm extends Component {
  render() {
    const {
      handleInputChange
    } = this.props;
    return (
      <>
        <Row>
          <Col md={6}>
            <TextField
              value={this.props.manufacturer}
              className="text-input"
              name="manufacturer"
              fullWidth
              label="Fabricante"
              placeholder="Cummins TURBO"
              onChange={handleInputChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={this.props.serialnum}
              className="text-input"
              name="serialnum"
              label="Número de Série"
              placeholder="MG85465"
              margin="normal"
              fullWidth
              onChange={handleInputChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TextField
              id="model"
              value={this.props.model}
              className="text-input"
              name="model"
              label="Modelo"
              margin="normal"
              placeholder="AVX-FJ908"
              fullWidth
              onChange={handleInputChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Col>
          <Col md={6}>
            <TextField
              id="price"
              value={this.props.price}
              className="text-input"
              name="price"
              label="Preço"
              placeholder="75.000,00"
              margin="normal"
              fullWidth
              onChange={handleInputChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default LocationForm;