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


export const TaskForm = () => {
  
  const { teamOptions, projectOptions, assetOptions } = useOptionsQuery();
  
  const [ formState, setFormState ] = useFormState();
  const location = useLocation<string>();
  
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
        />
      </FormContainer>
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
          />
        </div>
      </div>
    </>
  )
}
