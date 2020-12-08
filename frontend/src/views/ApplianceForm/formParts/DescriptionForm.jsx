import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Row,
  Col,
} from 'reactstrap';

class DescriptionForm extends Component {
  render() {
    const {
      handleInputChange
    } = this.props;
    return (
      <>
        <Row>
          <Col md={8}>
            <TextField
              value={this.props.name}
              className="text-input"
              name="name"
              fullWidth
              label="Equipamento"
              placeholder="Grupo motor gerador"
              onChange={handleInputChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Col>
          <Col md={4}>
            <TextField
              value={this.props.assetSf}
              className="text-input"
              placeholder="SEL-000-000"
              name="assetSf"
              fullWidth
              label="Código"
              margin="normal"
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col>
            <TextField
              id="description"
              value={this.props.description}
              className="text-input"
              name="description"
              label="Descrição"
              placeholder="Sistema de geração de energia elétrica."
              fullWidth
              multiline
              onChange={handleInputChange}
              rows="6"
              rowsMax="20"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default DescriptionForm;