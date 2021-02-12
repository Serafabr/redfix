import React, { Component } from 'react';
import AssetCard from '../../components/Cards/AssetCard';
import { compose } from 'redux';
import './ApplianceForm.css';

import FormGroup from '../../components/Forms/FormGroup';
import ButtonsContainer from '../../components/Forms/ButtonsContainer';
import DescriptionForm from './formParts/DescriptionForm';
import PurchaseForm from './formParts/PurchaseForm';
import ParentForm from './formParts/ParentForm';
import { withProps, withGraphQL, withQuery, withForm, withMutation } from '../../hocs'
import props from './props';
import paths from '../../paths';


class FacilityForm extends Component {
  render() {
    const { history, handleFunctions, formState, mutate } = this.props;
    const data = this.props.data.formData.nodes[0];
    return (
      <AssetCard
        sectionName={'Cadastro de Equipamentos'}
        sectionDescription={'Formulário para cadastro de novos equipamentos'}
        handleCardButton={() => { history.push(paths.appliance.all) }}
        buttonName={'Equipamentos'}
      >
        <div className="input-container">
          <form noValidate autoComplete="off">
            <FormGroup sectionTitle="Descrição do Equipamento">
              <DescriptionForm
                handleInputChange={handleFunctions.handleInputChange}
                {...formState}
              />
            </FormGroup>
            <FormGroup sectionTitle="Detalhes sobre a Aquisição">
              <PurchaseForm
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
                data={data}
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