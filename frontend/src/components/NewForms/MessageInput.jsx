import React, { useState, useContext } from 'react';
import { Button, Input } from 'reactstrap';
import './Message.css'

import { useQuery, useMutation } from '@apollo/react-hooks';

import { INSERT_TASK_MESSAGE, TASK_MESSAGES } from './graphql/messageFormGql';
import { UserContext } from '../../context/UserProvider';

function MessageInput({ toggleForm, taskId }) {
  const [ messageValue, setMessageValue ] = useState('');
  const { team } = useContext(UserContext);
  
  console.log("MessageValue: ", messageValue, typeof messageValue);
  
  const [ insertTaskMessage, { errorInsert } ] = useMutation(INSERT_TASK_MESSAGE, {
    variables: {
      taskId,
      teamId: team && team.value,
      note: messageValue,
    },
    refetchQueries: [{ query: TASK_MESSAGES, variables: { taskId } }],
    onError: (err) => { console.log(err); },
  });

  function onChangeMessage({target}) {
    if(target) {
      setMessageValue(target.value);
    } 
  }

  function handleSubmit() {
    insertTaskMessage();
    toggleForm();
    setMessageValue('');
  }

  function handleClean() {
    setMessageValue('');
  }

  return ( 
    <div className='miniform-container'>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Nova mensagem
          </div>
          <div className='miniform__field__sub-label'>
            Escreva sua mensagem no campo abaixo. Após, clique em "Enviar Mensagem".
          </div>
          <div className='miniform__field__input'>
            <Input 
              className='miniform__field__textarea'
              type="textarea" 
              name="text" 
              id="exampleText" 
              rows='4'
              value={messageValue}
              onChange={onChangeMessage}
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
            Enviar Mensagem
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
            Cancelar
          </Button>
        </div>
      </div>
   );
}
 
export default MessageInput;