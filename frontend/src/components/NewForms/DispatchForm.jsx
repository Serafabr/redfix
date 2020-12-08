import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { Button, Input } from 'reactstrap';
import classNames from 'classnames';
import './DispatchForm.css'
import { useQuery, useMutation } from '@apollo/react-hooks';

import { ALL_TEAMS_QUERY, SEND_TASK, TASK_EVENTS_QUERY } from './graphql/dispatchFormGql';
import { UserContext } from '../../context/UserProvider';

const selectStyles = {
  control: base => ({
    ...base,
    border: "1px solid #e4e7e9",
  }),
};

function DispatchForm({ visible, toggleForm, taskId }) { 
  const [ teamValue, setTeamValue ] = useState(null);
  const [ observationValue, setObservationValue ] = useState(null);
  const [ teamOptions, setTeamOptions ] = useState([]);
  
  const userContext = useContext(UserContext);

  const { loading } = useQuery(ALL_TEAMS_QUERY, {
    variables: { taskId },
    onCompleted: ({ allTaskData: { nodes: [{ sendOptions: data }]}}) => {
      const teamOptionsData = data && data.map(team => ({value: team.teamId, label: team.name}));
      setTeamOptions(teamOptionsData);
    }
  });

  const [ dispatchTask, { errorInsert } ] = useMutation(SEND_TASK, {
    variables: {
      taskId,
      personId: userContext.user && userContext.user.value,
      teamId: userContext.team &&  userContext.team.value,
      nextTeamId: teamValue && teamValue.value,
      note: observationValue,
    },
    onCompleted: () => {
      setTeamValue(null);
      setObservationValue("");
    },
    refetchQueries: [{ query: TASK_EVENTS_QUERY, variables: { taskId } }],
    onError: (err) => { console.log(err); },
  });

  const miniformClass = classNames({
    'miniform-container': true,
    'miniform-disabled': !visible
  });

  function onChangeTeam(target) {
    if(target) {
      setTeamValue({
        label: target.label,
        value: target.value,
      });
    } else {
      setTeamValue(null);
    }
  }

  function onChangeObservation({target}) {
    if(target) {
      setObservationValue(target.value);
    } 
  }

  function handleClean() {
    setTeamValue(null);
    setObservationValue("");
  } 

  function handleSubmit() {
    dispatchTask()
    toggleForm();
    handleClean();
  }

  function handleCancel() {
    toggleForm();
    handleClean();
  }

  return ( 
    <div className={miniformClass}>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Tramitar para
          </div>
          <div className='miniform__field__sub-label'>
            Escolha a equipe que será o destinatário da tarefa.
          </div>
          <div className='miniform__field__input'>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable
              isSearchable
              name="team"
              value={teamValue}
              options={teamOptions}
              styles={selectStyles}
              onChange={onChangeTeam}
              placeholder={'Equipes ...'}
            />
          </div>
        </div>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Observações
          </div>
          <div className='miniform__field__sub-label'>
            Deixe registrado o motivo da tramitação, ou qualquer outra informação relevante.
          </div>
          <div className='miniform__field__input'>
            <Input 
              className='miniform__field__textarea'
              type="textarea" 
              name="text"
              value={observationValue}
              id="exampleText"
              rows='3'
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
            Tramitar
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
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </div>
      </div>
   );
}
 
export default DispatchForm;