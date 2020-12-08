import React, { Component } from 'react';
import AssetCard from '../../components/Cards/AssetCard';
import './FacilityForm.css';
import FormGroup from '../../components/Forms/FormGroup';
import ButtonsContainer from '../../components/Forms/ButtonsContainer';
import DescriptionForm from './formParts/DescriptionForm';
import LocationForm from './formParts/LocationForm';
import ParentForm from './formParts/ParentForm';
import { withProps, withGraphQL, withQuery, withForm, withMutation } from '../../hocs'
import { compose } from 'redux';
import props from './props';

class FacilityForm extends Component {
  render() {
    const { history, handleFunctions, formState, mode, mutate, paths } = this.props;
    const formData = this.props.data.formData.nodes[0];
    return (
      <AssetCard
        sectionName={mode === 'update' ? 'Editar Edifício' : 'Cadastro de Edifício'}
        sectionDescription={mode === 'update' ? 'Formulário para modificar dados de um edifício' : 'Formulário para cadastro de uma nova área'}
        handleCardButton={() => { history.push(paths.all) }}
        buttonName={'Edifícios'}
      >
        <div className="input-container">
          <form noValidate autoComplete="off">
            <FormGroup sectionTitle="Descrição do Edifício / Área">
              <DescriptionForm
                handleInputChange={handleFunctions.handleInputChange}
                {...formState}
              />
            </FormGroup>
            <FormGroup sectionTitle="Localização e Área">
              <LocationForm
                handleInputChange={handleFunctions.handleInputChange}
                {...formState}
              />
            </FormGroup>
            <FormGroup sectionTitle="Relação entre Ativos">
              <ParentForm
                handleParentChange={handleFunctions.handleParentChange}
                handleContextChange={handleFunctions.handleContextChange}
                addNewParent={handleFunctions.addNewParent}
                removeParent={handleFunctions.removeParent}
                formData={formData}
                {...formState}
              />
            </FormGroup>
            <ButtonsContainer 
              mutate={mutate}
            />
          </form>
        </div>
      </AssetCard>
    );
  }
}

export default compose(
  withProps(props),
  withGraphQL,
  withQuery,
  withForm,
  withMutation
)(FacilityForm);