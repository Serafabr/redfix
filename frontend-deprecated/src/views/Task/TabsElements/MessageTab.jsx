import React, { useState } from 'react';
import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import AnimateHeight from 'react-animate-height';
import MessageInput from '../../../components/NewForms/MessageInput';
import MessageBox from '../../../components/Message/MessageBox';
import { logInfo } from '../utils/messageTab/descriptionMatrix';

function filterEvents(events, logTypeFilter) {
  if (logTypeFilter === 'all') {
    return events;
  } else {
    return events.filter(item => {
      if (logTypeFilter === 'status') {
        return (item.eventName === 'move' || item.eventName === 'insert');
      } else if (logTypeFilter === 'dispatch') {
        return (item.eventName === 'send' || item.eventName === 'receive' || item.eventName === 'cancel' || item.eventName === 'insert');
      } else {
        return item.eventName === 'note';
      }
    })
  }
}

function MessageTab({ data }) { 
  const [ messageInputOpen, setMessageInputOpen ] = useState(false);
  const { taskId, events } = data;
  const [ logTypeFilter, setLogTypeFilter ] = useState('all');
  
  if (events[0].eventName === 'insert') {
    events.reverse();
  }
  
  const filteredEvents = filterEvents(events, logTypeFilter);

  const actionButtons = {
    messageInputOpen: [
      {name: 'Cancelar', color: 'danger', onClick: toggleMessageInput}
    ],
    noFormOpen: [
      {name: 'Nova Mensagem', color: 'success', onClick: toggleMessageInput},
    ],
  };

  const heightMessageInput = messageInputOpen === true ? 'auto' : 0;
  
  function handleLogTypeFilterChange(event) {
    setLogTypeFilter(event.target.value);
  }
  
  function toggleMessageInput() {
    setMessageInputOpen(!messageInputOpen);
  }

  return (
    <div className="tabpane-container">
      <PaneTitle 
        actionButtons={messageInputOpen ? actionButtons.messageInputOpen : actionButtons.noFormOpen}
        title={messageInputOpen ? 'Escrever mensagem' : 'Histórico'}
      />
      <AnimateHeight 
        duration={300}
        height={heightMessageInput}
      >
        <div className="tabpane__content">
          <MessageInput 
            toggleForm={toggleMessageInput}
            taskId={taskId}
          />
        </div>
      </AnimateHeight>
      {(messageInputOpen) && (
        <PaneTitle 
          title={'Histórico'}
        />
      )}
      <div className="tabpane__content" style={{ marginBottom: '20px' }}>
        <PaneTextContent 
          numColumns='2' 
          itemsMatrix={logInfo(filteredEvents.length.toString().padStart(3, "0"), handleLogTypeFilterChange)}
        />
      </div>
      <div className="messages_list">
        {
          filteredEvents.map(event => (
            <div className="messagebox__container">
              <MessageBox 
                event={event}
                taskId={taskId}
              />
              <div className="horizontal-line" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MessageTab;