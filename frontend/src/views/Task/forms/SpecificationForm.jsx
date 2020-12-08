import React, { useState, useContext } from 'react';
import InfoForm from '../../TaskForm/formParts/InfoForm'
import { useQuery, useMutation } from '@apollo/react-hooks'; 

import { FORM_OPTIONS_QUERY } from '../../TaskForm/graphql/taskFormGQL';
import { EDIT_TASK, TASK_QUERY } from '../graphql/gql';
import { UserContext } from '../../../context/UserProvider';

export default function SpecificationForm({ 
  task,
  title,
  place,
  category,
  priority,
  description,
  handleInputChange,
  handleSelectionChange,
  toggleForm
 }) {
  
  const [ formOptions, setFormOptions ] = useState({
    categories: [],
    priorities: [],
  });
  
  const { team } = useContext(UserContext);
  
  const { taskId, dateStart, dateLimit, dateEnd, progress } = task;
  
  const { loading } = useQuery(FORM_OPTIONS_QUERY, {
    onCompleted: (data) => {
      const { priorityOptions, categoryOptions } = data.allTaskFormData.nodes[0];
      
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
  
  const [ editTask, { error } ] = useMutation(EDIT_TASK, {
    variables: {
      taskId,
      title,
      place,
      taskCategoryId: category && category.value,
      taskPriorityId: priority && priority.value,
      description: description,
      teamId: team.value,
      dateStart,
      dateLimit,
      dateEnd,
      progress,
    },
    onCompleted: () => {
    },
    refetchQueries: [{ query: TASK_QUERY, variables: { taskId } }],
    onError: (err) => { console.log(err); },
  });
  
  return (
    <InfoForm 
      title={title}
      place={place}
      category={category}
      priority={priority}
      description={description}
      handleInputChange={handleInputChange}
      handleSelectionChange={handleSelectionChange}
      toggleForm={toggleForm}
      addSubmitButtons={true}
      editTask={editTask}
    />
  )
}
