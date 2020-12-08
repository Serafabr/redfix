import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { Button, Input } from 'reactstrap';
import classNames from 'classnames';
import './DispatchForm.css'
import { useQuery, useMutation } from '@apollo/react-hooks';

import { UserContext } from '../../context/UserProvider';
import { RECEIVE_TASK, TASK_EVENTS_QUERY } from './graphql/dispatchFormGql';
import { MOVE_OPTIONS_QUERY } from './graphql/statusFormGql';

const NO_FORM = 'noForm';

const selectStyles = {
  control: base => ({
    ...base,
    border: "1px solid #e4e7e9",
  }),
};

function StatusForm({ visible, toggleForm, taskId, setOpenedForm }) {
  const [ statusValue, setStatusValue ] = useState(null);
  const [ observationValue, setObservationValue ] = useState(null);
  const [ moveOptions, setMoveOptions ] = useState([]);
  
  const { user, team } = useContext(UserContext);
  
  const { loading } = useQuery(MOVE_OPTIONS_QUERY, {
    onCompleted: ({ allTaskData: { nodes: [{ moveOptions: data }]}}) => {
      const moveOptionsData = data.map(option => ({value: option.taskStatusId, label: option.taskStatusText}));
      setMoveOptions(moveOptionsData);
    }
  });
  
  const [ receiveTask, { errorMove } ] = useMutation(RECEIVE_TASK, {
    variables: {
      taskId,
      personId: user && user.value,
      teamId: team &&  team.value,
      taskStatusId: statusValue && statusValue.value,
      note: observationValue,
    },
    onCompleted: () => {
      setStatusValue(null);
      setObservationValue(null);
      setOpenedForm(NO_FORM);
    },
    refetchQueries: [{ query: TASK_EVENTS_QUERY, variables: { taskId } }],
    awaitRefetchQueries: true,
    onError: (err) => { console.log(err); },
  });
  
  const miniformClass = classNames({
    'miniform-container': true,
    'miniform-disabled': !visible
  });

  function onChangeStatus(target) {
    if(target) {
      setStatusValue({
        label: target.label,
        value: target.value
      });
    } else {
      setStatusValue(null);
    }
  }

  function onChangeObservation(target) {
    if(target) {
      setObservationValue(target.value);
    } 
  }

  function handleSubmit() {
    receiveTask();
    toggleForm();
  }

  function handleClean() {
    setStatusValue(null);
    setObservationValue(null);
  }

  return ( 
    <div className={miniformClass}>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Novo status
          </div>
          <div className='miniform__field__sub-label'>
            Para concluir o recebimento da tarefa, escolha o seu status atual.
          </div>
          <div className='miniform__field__input'>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={'Semac'}
              isClearable
              isSearchable
              name="team"
              value={statusValue}
              options={moveOptions}
              styles={selectStyles}
              onChange={onChangeStatus}
              placeholder={'Status ...'}
            />
          </div>
        </div>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Observações
          </div>
          <div className='miniform__field__sub-label'>
            Deixe registrado o motivo do novo status, ou qualquer outra informação relevante.
          </div>
          <div className='miniform__field__input'>
            <Input 
              className='miniform__field__textarea'
              type="textarea" 
              name="text" 
              id="exampleText" 
              rows='3'
              value={observationValue}
              onChange={onChangeObservation}
            />
          </div>
        </div>
        <div className='miniform__buttons'>
          <Button
            color="success"
            size="sm"
            style={{ marginRight: "10px" }}
            onClick={handleSubmit}
          >
            Receber Tarefa
          </Button>
          <Button 
            color="secondary"
            size="sm" 
            style={{ marginRight: "10px" }}
            onClick={handleClean}
          >
            Limpar
          </Button>
          <Button 
            color="danger" 
            size="sm"
            onClick={toggleForm}
          >
            Voltar
          </Button>
        </div>
      </div>
   );
}
 
export default StatusForm;