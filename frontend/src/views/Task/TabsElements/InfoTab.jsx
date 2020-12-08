import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';

import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import { itemsMatrixGeneral, itemsMatrixDate } from '../utils/descriptionMatrix';
import SpecificationForm from '../forms/SpecificationForm';
import DateForm from '../../TaskForm/formParts/DateForm';
import DateEditForm from '../forms/DateEditForm';

const EDIT_FORM = "editForm";
const DATE_FORM = "dateForm";
const NO_FORM = "noForm";

function InfoTab({ data }) {
  const [ openedForm, setOpenedForm ] = useState(NO_FORM);

  const initialFormValues = {
    title: data.title,
    place: data.place,
    category: { label: data.taskCategoryText, value: data.taskCategoryId },
    priority: { label: data.taskPriorityText, value: data.taskPriorityId },
    description: data.description,
    dateStart: data.dateStart,
    dateLimit: data.dateLimit,
    dateEnd: data.dateEnd,
    progress: data.progress,
  };
  
  const [ formValues, setFormValues ] = useState(initialFormValues);
  
  function handleSelectionChange(item, { name: selectName }) {
    setFormValues({
      ...formValues,
      [selectName]: item,
    })
  }
  
  function handleInputChange({target: {name, value}}) {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }
  
  function handleDateChange(inputName) {
    return function (date) {
      setFormValues({
        ...formValues,
        [inputName]: date,
      });
    }
  }
  
  function handleProgressChange({target}) {
    setFormValues({
      ...formValues,
      progress: parseInt(target.value),
    });
  }
  
  function toggleForm(form) {
    setFormValues(initialFormValues);
    if (openedForm === form) {
      setOpenedForm(NO_FORM);
    } else {
      setOpenedForm(form);
    }
  }
  
  useEffect(() => {
    return () => {
      setOpenedForm(NO_FORM);
    }
  }, [])
  
  const actionButtons = {
    editForm: [
      {name: 'Cancelar', color: 'danger', onClick: () => {toggleForm(EDIT_FORM)}}
    ],
    dateForm: [
      {name: 'Cancelar', color: 'danger', onClick: () => {toggleForm(DATE_FORM)}}
    ],
    noForm: [
      {name: 'Alterar Especificações', color: 'primary', onClick: () => {toggleForm(EDIT_FORM)}},
      {name: 'Alterar Datas', color: 'success', onClick: () => {toggleForm(DATE_FORM)}}
    ],
  };
  
  const titlesPane = {
    editForm: 'Alterar Especificações',
    dateForm: 'Alterar Datas e Prazos',
    noForm: 'Informações Gerais',
  }
  
  const formOpen = {
    editForm: true,
    dateForm: true,
    noForm: false,
  }
  
  return (
    <div className="tabpane-container">
      <PaneTitle 
        actionButtons={actionButtons[openedForm]}
        title={titlesPane[openedForm]}
      />
      <AnimateHeight 
        duration={openedForm === EDIT_FORM ? 300 : 0}
        height={openedForm === EDIT_FORM ? 'auto' : 0}
      >
        <div className="tabpane__content">
          <SpecificationForm 
            task={data}
            title={formValues.title}
            place={formValues.place}
            category={formValues.category}
            priority={formValues.priority}
            description={formValues.description}
            handleInputChange={handleInputChange}
            handleSelectionChange={handleSelectionChange}
            toggleForm={() => {toggleForm(EDIT_FORM)}}
          />
        </div>
      </AnimateHeight>
      <AnimateHeight 
        duration={openedForm === DATE_FORM ? 300 : 0}
        height={openedForm === DATE_FORM ? 'auto' : 0}
      >
        <div className="tabpane__content">
          <DateEditForm 
            task={data}
            dateStart={formValues.dateStart}
            dateLimit={formValues.dateLimit}
            dateEnd={formValues.dateEnd}
            progress={formValues.progress}
            handleDateChange={handleDateChange}
            handleProgressChange={handleProgressChange}
            toggleForm={() => {toggleForm(DATE_FORM)}}
          />
        </div>
      </AnimateHeight>
      {formOpen[openedForm] && (
        <PaneTitle 
          title={'Especificações'}
        />
      )}
      <div className="tabpane__content">
        <PaneTextContent 
          numColumns='2' 
          itemsMatrix={itemsMatrixGeneral(data)}
        />
      </div>
      <PaneTitle 
        title={'Prazos e Datas'}
      />
      <div className="tabpane__content">
        <PaneTextContent 
          numColumns='2' 
          itemsMatrix={itemsMatrixDate(data)}
        />
      </div>
    </div>
  );
}

export default InfoTab;