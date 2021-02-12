import React, { useState, useContext } from 'react'
import DateForm from '../../TaskForm/formParts/DateForm';
import { EDIT_TASK, TASK_QUERY } from '../graphql/gql';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UserContext } from '../../../context/UserProvider';

export default function DateEditForm({ task, ...rest }) {
  
  const { taskId, title, taskCategoryId, taskPriorityId, description, place } = task;
  const { dateStart, dateLimit, dateEnd, progress } = rest;
  
  console.log("Place: ", place);
  
  const { team } = useContext(UserContext);
  
  const [ editTaskDate, { error } ] = useMutation(EDIT_TASK, {
    variables: {
      taskId,
      title,
      place,
      taskCategoryId,
      taskPriorityId,
      description,
      teamId: team && team.value,
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
    <DateForm 
      {...rest}
      editTaskDate={editTaskDate}
      isEditDateForm
    />
  )
}
