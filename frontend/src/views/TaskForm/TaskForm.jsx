import React, { useContext, useState } from 'react';
import AssetCard from '../../components/Cards/AssetCard';
import { Row, Col, Button } from 'reactstrap';
import './TaskForm.css';
import paths from '../../paths';
import PaneTitle from '../../components/TabPanes/PaneTitle';
import TaskFormEditAsset from '../../components/NewForms/TaskFormEditAsset';
import { useQuery, useMutation } from '@apollo/react-hooks'; 
import MaskedTextInput from "react-text-mask";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import { FORM_OPTIONS_QUERY, INSERT_TASK } from './graphql/taskFormGQL';
import { TASKS_QUERY } from '../../views/Tasks/graphql/gql';
import { UserContext } from '../../context/UserProvider';
import InfoForm from './formParts/InfoForm';
import DateForm from './formParts/DateForm';
registerLocale("pt", pt);


function TaskForm({ history }) {
  const [ formOptions, setFormOptions ] = useState({
    categories: [],
    priorities: [],
  });
  const [ formValues, setFormValues ] = useState({
    title: '',
    place: '',
    category: null,
    priority: null,
    description: '',
    assets: [],
  });
  
  const { team } = useContext(UserContext);
  
  const { loading } = useQuery(FORM_OPTIONS_QUERY, {
    onCompleted: ({ allTaskFormData: { nodes: [{ priorityOptions, categoryOptions }]}}) => {
      setFormOptions({
        ...formOptions,
        categories: categoryOptions.map(option => ({
          value: option.taskCategoryId, 
          label: option.taskCategoryText,
        })),
        priorities: priorityOptions.map(option => ({
          value: option.taskPriorityId, 
          label: option.taskPriorityText,
        }))
      });
    }
  });
  
  const [ insertTask, { errorInsert } ] = useMutation(INSERT_TASK, {
    variables: {
      title: formValues.title,
      place: formValues.place,
      description: formValues.description,
      teamId: team && team.value,
      taskCategoryId: formValues.category && formValues.category.value,
      taskPriorityId: formValues.priority && formValues.priority.value,
      taskStatusId: 1,
      dateStart: formValues.dateStart,
      dateLimit: formValues.dateLimit,
      assets: formValues.assets && formValues.assets.map(asset => asset.value),
    },
    onCompleted: (data) => {
      history.push(`/tarefas/ver/${data.insertTask.id}`);
    },
    refetchQueries: [{ query: TASKS_QUERY }],
    onError: (err) => { console.log(err); },
  });
  
  function insertAsset(selectedAsset) {
    if (selectedAsset) {
      setFormValues({
        ...formValues,
        assets: [...formValues.assets, selectedAsset]
      });
    }
  }
  
  function deleteAsset(assetId) {
    setFormValues({
      ...formValues,
      assets: formValues.assets.filter(asset => asset.value !== assetId)
    });
  }
  
  function cleanAssets() {
    setFormValues({
      ...formValues,
      assets: []
    });
  }
  
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
  
  return (
    <div className="form-container">
      <AssetCard
        sectionName={'Cadastro de Tarefa'}
        sectionDescription={'Formulário para cadastro de novas ordens de serviço'}
        handleCardButton={() => { history.push(paths.task.all) }}
        buttonName={'Tarefas'}
      >
        <form autoComplete="off">
          <PaneTitle
            title='Informações gerais'
          />
          <InfoForm 
            title={formValues.title}
            place={formValues.place}
            category={formValues.category}
            priority={formValues.priority}
            description={formValues.description}
            handleInputChange={handleInputChange}
            handleSelectionChange={handleSelectionChange}
          />
          <PaneTitle
            title='Prazos e Datas'
          />
          <DateForm 
            dateStart={formValues.dateStart}
            dateLimit={formValues.dateLimit}
            handleDateChange={handleDateChange}
          />
          <PaneTitle
            title='Ativos'
          />
          <TaskFormEditAsset
            assets={formValues.assets}
            insertAsset={insertAsset}
            deleteAsset={deleteAsset}
            cleanAssets={cleanAssets}
          />
          <div className="form-add-task__final-buttons">
            <Button 
              color="success" 
              size="sm"
              style={{ marginRight: '10px' }}
              onClick={insertTask}
            >
              Cadastrar
            </Button>
            <Button 
              color="primary" 
              size="sm"
              style={{ marginRight: '10px' }}
            >
              Limpar
            </Button>
            <Button 
              color="danger" 
              size="sm"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </AssetCard>
    </div>
  );
}

export default TaskForm;