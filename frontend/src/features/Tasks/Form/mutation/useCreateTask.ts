import { useMutation } from '@apollo/client'
import { CREATE_TASK } from './createTask';

export const useCreateTask = () => {
  const [ createTask, { data } ] = useMutation(CREATE_TASK);
  
  
}
