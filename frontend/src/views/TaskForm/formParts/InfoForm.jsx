import React, { useState } from 'react';
import '../TaskForm.css';
import { FORM_OPTIONS_QUERY } from '../graphql/taskFormGQL';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Input, Row, Col, Button } from 'reactstrap'; 
import Select, { createFilter } from 'react-select';

const selectStyles = {
  control: base => ({
    ...base,
    border: "1px solid #e4e7e9",
  }),
};

export default function InfoForm({
  title,
  place,
  category,
  priority,
  description,
  handleInputChange,
  handleSelectionChange,
  toggleForm,
  addSubmitButtons,
  editTask
}) {
  
  const [ formOptions, setFormOptions ] = useState({
    categories: [],
    priorities: [],
  });
  
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
  
  function handleSubmitForm() {
    editTask();
    toggleForm();
  }
  
  return (
    <div className="form-add-task-container">
      <div className='form-add-task__field'>
        <div className='form-add-task__field__label'>
          Título
        </div>
        <div className='form-add-task__field__sub-label'>
          Descreva, em poucas palavras, a tarefa que será criada
        </div>
        <Input 
          className='form-control form-add-task__field__input'
          type="text" 
          name="title"
          id="exampleText"
          onChange={handleInputChange}
          value={title}
        />
      </div>
      <div className='form-add-task__field'>
        <div className='form-add-task__field__label'>
          Local
        </div>
        <div className='form-add-task__field__sub-label'>
          Descreva o local onde será realizado o serviço
        </div>
        <Input 
          className='form-control form-add-task__field__input'
          type="text" 
          name="place"
          id="exampleText"
          onChange={handleInputChange}
          value={place}
        />
      </div>
      <Row>
        <Col md={6}>
          <div className='form-add-task__field'>
            <div className='form-add-task__field__label'>
              Categoria
            </div>
            <div className='form-add-task__field__sub-label'>
              Escolha a área de atuação da tarefa
            </div>
            <Select
              className="basic-single form-add-task__field__input"
              classNamePrefix="select"
              isClearable
              isSearchable
              name="category"
              value={category}
              filterOption={createFilter({ ignoreAccents: false })}
              options={formOptions.categories}
              styles={selectStyles}
              onChange={handleSelectionChange}
              placeholder=''
            />
          </div>
        </Col>
        <Col md={6}>
          <div className='form-add-task__field'>
            <div className='form-add-task__field__label'>
              Prioridade
            </div>
            <div className='form-add-task__field__sub-label'>
              Escolha o nível de prioridade do serviço
            </div>
            <Select
              className="basic-single form-add-task__field__input"
              classNamePrefix="select"
              isClearable
              isSearchable
              name="priority"
              value={priority}
              filterOption={createFilter({ ignoreAccents: false })}
              options={formOptions.priorities}
              styles={selectStyles}
              onChange={handleSelectionChange}
              placeholder=''
            />
          </div>
        </Col>
      </Row>
      <div className='form-add-task__field'>
        <div className='form-add-task__field__label'>
          Descrição técnica
        </div>
        <div className='form-add-task__field__sub-label'>
          Descreva detalhadamente os procedimentos para a execução da tarefa
        </div>
        <Input 
          className='form-control form-add-task__field__input'
          type="textarea" 
          name="description"
          rows={4}
          id="exampleText"
          onChange={handleInputChange}
          value={description}
        />
      </div>
      {addSubmitButtons && (
        <div className="info-form__buttons">
          <Button 
            color="success" 
            size="sm" 
            style={{ marginRight: "10px" }}
            onClick={handleSubmitForm}
          >
            Salvar Alterações
          </Button>
          <Button 
            color="danger" 
            size="sm"
            onClick={toggleForm}
          >
            Cancelar
          </Button>
      </div>
      )}
    </div>
  )
}
