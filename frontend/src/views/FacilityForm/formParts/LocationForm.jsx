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
              value={this.props.area}
              className="text-input"
              name="area"
              fullWidth
              label="Área"
              placeholder="1.201"
              onChange={handleInputChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">m²</InputAdornment>,
              }}
              variant="outlined"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col me={6}>
            <TextField
              id="latitude"
              value={this.props.latitude}
              className="text-input"
              name="latitude"
              label="Latitude"
              placeholder="125.0546516"
              fullWidth
              onChange={handleInputChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">graus</InputAdornment>,
              }}
            />
          </Col>
          <Col me={6}>
            <TextField
              id="longitude"
              value={this.props.longitude}
              className="text-input"
              name="longitude"
              label="Longitude"
              placeholder="58.3513536"
              fullWidth
              onChange={handleInputChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">graus</InputAdornment>,
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default LocationForm;