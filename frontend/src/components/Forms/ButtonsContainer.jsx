import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './ButtonsContainer.css'

class ButtonsContainer extends Component {
  render() { 
    return ( 
      <div className="buttons-container">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
          onClick={this.props.mutate}
        >
          Cadastrar
        </Button>
        <Button variant="contained" style={{ marginRight: "10px" }}>
          Limpar
        </Button>
        <Button variant="contained" color="secondary">
          Cancelar
        </Button>
      </div>
     );
  }
}

export default ButtonsContainer;
