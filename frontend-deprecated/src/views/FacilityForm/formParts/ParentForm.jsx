import React, { Component } from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Row,
  Col,
} from 'reactstrap';
import ListboxComponent from './ListboxComponent';
import CustomTable from '../../../components/Tables/CustomTable';
import tableConfig from '../utils/tableConfig';

class ParentForm extends Component {

  render() {
    const { handleParentChange, handleContextChange, addNewParent, removeParent } = this.props;
    const { topOptions, parentOptions } = this.props.formData;

    return (
      <>
        <Row>
          <Col md={8}>
            <Autocomplete
              id="assetParent"
              options={parentOptions}
              getOptionLabel={option => (`${option.assetSf}: ${option.name}`)}
              filterSelectedOptions
              onChange={handleParentChange}
              value={this.props.parent}
              ListboxComponent={ListboxComponent}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className="text-input"
                  label="Ativo Pai"
                  placeholder="Preenchimento Obrigatório"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Col>
          <Col md={4}>
            <Autocomplete
              id="assetContext"
              options={topOptions}
              getOptionLabel={option => option.name}
              filterSelectedOptions
              onChange={handleContextChange}
              value={this.props.context}
              ListboxComponent={ListboxComponent}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="text-input"
                  label="Contexto"
                  placeholder=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Col>
        </Row>
        <div style={{ marginTop: "10px" }} />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ background: "green" }}
            onClick={addNewParent}
          >
            Adicionar
          </Button>
        </div>
        <div className="table-container-form" >
          <CustomTable
            type={'raw-table'}
            tableConfig={tableConfig}
            data={this.props.parents}
            handleAction={{"delete": removeParent}}
          />
        </div>
      </>
    );
  }
}

export default ParentForm;