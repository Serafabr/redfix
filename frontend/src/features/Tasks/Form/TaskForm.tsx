import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation } from 'react-router';


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


export const TaskForm = () => {
  
  const { teamOptions, projectOptions, assetOptions } = useOptionsQuery();
  
  const [ formState, setFormState ] = useFormState();
  const location = useLocation<string>();
  
  const [ createTask, { data } ] = useMutation(CREATE_TASK);
  const createTaskVariables = {
    title: formState.task,
    place: formState.place,
    description: formState.description,
    // team: formState.team[0],
    taskCategoryId: parseInt(formState.category[0] as string),
    taskPriorityId: parseInt(formState.priority[0] as string ),
    // taskStatusId: formState.status[0],
    projectId: parseInt(formState.project[0] as string),
    dateStart: dayjs(formState.startDate, 'DD/MM/YYYY').toDate(),
    dateLimit: dayjs(formState.limitDate, 'DD/MM/YYYY').toDate(),
    assets: formState.assets.map((asset) => parseInt(asset as string)),
  }
  
  const handleSubmitButton = () => {
    createTask({
      variables: createTaskVariables,
    });
  };
  
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
            />
          </div>
          <div className={style.ButtonWrapper}>
            <Button 
              text="Cancelar"
              buttonType={ButtonType.Danger}
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
    </>
  )
}
