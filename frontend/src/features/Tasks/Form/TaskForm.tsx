import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation } from 'react-router';
import { useState, useRef } from 'react';

import { FormHeader, FormContent, FormContainer } from '../../../components/Forms';
import { FormSituationType } from '../../../components/Forms/_types';


import { TaskDescription } from './sections/TaskDescription/TaskDescription';
import { TaskDates } from './sections/TaskDates/TaskDates';
import { TaskFiles } from './sections/TaskFiles/TaskFiles';

import { Button } from '../../../components/Buttons';

import plusIcon from '../../../assets/icons/plus-blue.svg';
import { OptionsType } from '../../../components/SelectBox/_types';
import { useFormState } from './data/useFormState';

import { TaskAssets } from './sections/TaskAssets/TaskAssets';
import { ButtonType } from '../../../components/Buttons/_types';
import { useOptionsQuery } from './options/useOptionsQuery';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from './mutations/graphql';
import dayjs from 'dayjs';
import { ModalCancelCreateTask } from './modals/CancelCreateTask/CancelCreateTask';
import { ModalCleanTaskForm } from './modals/CleanTaskForm/CleanTaskForm';
import { useErrorForm } from './data/useErrorForm';

import { hasError } from './data/checkErrors';
import { useHistory } from 'react-router-dom';
import { ErrorListModal } from './modals/ErrorList/ErrorList';

type Props = {
  bodyRef: any,
}

export const TaskForm = ({ bodyRef }: Props) => {
  
  // Modals
  const [ isCancelModalOpen, setIsCancelModalOpen ] = useState<boolean>(false);
  const [ isCleanModalOpen, setIsCleanModalOpen ] = useState<boolean>(false);
  const [ isErrorModalOpen, setIsErrorModalOpen ] = useState<boolean>(false);
  
  const { teamOptions, projectOptions, assetOptions } = useOptionsQuery();
  
  const [ formState, setFormState, cleanState ] = useFormState();
  
  //const [ errorForm, setErrorForm, updateAllErrors ] = useErrorForm();
  
  
  const location = useLocation<string>();
  const history = useHistory();
  
  const [ createTask, { data } ] = useMutation(CREATE_TASK);
  
  const createTaskVariables = {
    title: formState.task,
    place: formState.place,
    description: formState.description,
    // team: formState.team[0],
    taskCategoryId: parseInt(formState.category[0]),
    taskPriorityId: parseInt(formState.priority[0]),
    // taskStatusId: formState.status[0],
    projectId: parseInt(formState.project[0]),
    dateStart: dayjs(formState.startDate, 'DD/MM/YYYY').toDate(),
    dateLimit: dayjs(formState.limitDate, 'DD/MM/YYYY').toDate(),
    assets: formState.assets.map((asset) => parseInt(asset)),
  }
  
  const handleSubmitButton = () => {
    console.log('submiting...')
    console.log(hasError(formState));
    
    if (hasError(formState)) {
      bodyRef?.current?.scrollTo(0, 0);
      setIsErrorModalOpen(true);
      return; 
    }
    
    console.log('creating task...');
    createTask({
      variables: createTaskVariables,
    });
    
    history.push('/tarefas');
  };
  
  const handleCancelButton = () => {
    setIsCancelModalOpen(true);
  }
  
  const handleCleanButton = () => {
    setIsCleanModalOpen(true);
  }
  
  const handleCleanState = () => {
    bodyRef?.current?.scrollTo(0, 0);
    cleanState();
  }
  
  return (
    <>
      <TitleArea 
        title={`Cadastrar tarefa`}
        path={location.pathname}
        buttons={[]}
      />
      <FormContainer>
        {/* Task Description Section */}
        <TaskDescription 
          formData={formState}
          setFormData={setFormState}
          teamOptions={teamOptions}
          projectOptions={projectOptions}
        />
        {/* Task Dates Section */}
        <TaskDates 
          formData={formState}
          setFormData={setFormState}
        />
        {/* Task Assets Section */}
        <TaskAssets 
          queryAssetOptions={assetOptions}
          formData={formState}
          setFormData={setFormState}
        />
        <div className={style.ForwardBox}>
          <div className={style.ButtonWrapper}>
            <Button 
              text="Limpar"
              buttonType={ButtonType.Warning}
              onClick={handleCleanButton}
            />
          </div>
          <div className={style.ButtonWrapper}>
            <Button 
              text="Cancelar"
              buttonType={ButtonType.Danger}
              onClick={handleCancelButton}
            />
          </div>
          <div>
            <Button 
              text="Cadastrar tarefa"
              onClick={handleSubmitButton}
            />
          </div>
        </div>
      </FormContainer>
      <ModalCleanTaskForm
        isOpen={isCleanModalOpen}
        setIsOpen={setIsCleanModalOpen}
        handleCleanState={handleCleanState}
      />
      <ModalCancelCreateTask 
        isOpen={isCancelModalOpen}
        setIsOpen={setIsCancelModalOpen}
      />
      <ErrorListModal 
        isOpen={isErrorModalOpen}
        setIsOpen={setIsErrorModalOpen}
        taskForm={formState}
      />
    </>
  )
}
