import { useState } from 'react';
// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { DataGrid } from '../../../../../components/DataDisplays';
import { InputField, DateInput } from '../../../../../components/Inputs';
import { useErrorFormState } from '../../data/useErrorFormState';
// Functions
import { handleTextInput } from '../../data/handleTextInput';
import { isDateStringValid } from '../../data/dateFunctions';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';
// Style
import style from './TaskDates.module.scss';

/*************************\
 * General types
\*************************/

type InputDescriptionData = {
  startDate?: string,
  limitDate?: string,
};

type InputSetDescriptionData = {
  startDate: React.Dispatch<string>,
  limitDate: React.Dispatch<string>,
};

/*************************\
 * PropTypes
\*************************/

type Props = {
  step?: number | null,
  totalSteps?: number | null,
  situation?: FormSituationType,
  formData: InputDescriptionData,
  setFormData: InputSetDescriptionData,
};

/*************************\
 * Default Types
\*************************/

const defeaultSetDescriptionData = {
  startDate: () => {},
  limitDate: () => {},
}

const defaultDescriptionData = {
  startDate: '',
  limitDate: '',
}

const defaultSetter = () => {};

/*************************\
 * TaskDates Component
\*************************/

export const TaskDates = ({
  step = 1,
  totalSteps = 1,
  situation = FormSituationType.Ok,
  formData,
  setFormData,
}: Props) => {
  
  const [ hasFocus, setHasFocus ] = useState({
    startDate: false,
    limitDate: false,
  });
  
  const dateError = {
    startDate: !hasFocus.startDate && !isDateStringValid(formData.startDate),
    limitDate: !hasFocus.limitDate && !isDateStringValid(formData.limitDate),
  }
  
  const handleOnFocus = (dateId: "startDate" | "limitDate") => () => {
    const newHasFocus = {...hasFocus};
    newHasFocus[dateId] = true;
    setHasFocus(newHasFocus);
  }
  
  const handleOnBlur = (dateId: "startDate" | "limitDate") => () => {
    const newHasFocus = {...hasFocus};
    newHasFocus[dateId] = false;
    setHasFocus(newHasFocus);
  }
  
  return (
    <>
    <FormHeader
      title="Datas e prazos"
      subtitle="Prazos para o ínicio e término da tarefa. Estes campos NÃO precisam ser obrigatoriamente preenchidos. O usuário poderá preenchê-los posteriormente."
      step={2}
      totalSteps={3}
      situation={situation}
    />
    <FormContent marginBottom={true}>
      <DataGrid className={style.DatesGrid}>
        <InputField
            label="Início da execução"
            gridArea="startDate"
            error={dateError.startDate}
            errorMessage={"Data inválida! Utilizar o formato: DD/MM/AAAA."}
          >
          <DateInput 
            value={formData.startDate}
            onChange={handleTextInput('startDate', setFormData)}
            onFocus={handleOnFocus('startDate')}
            onBlur={handleOnBlur('startDate')}
            error={dateError.startDate}
          />
        </InputField>
        <InputField
          label="Prazo final"
          gridArea="limitDate"
          error={dateError.limitDate}
          errorMessage={"Data inválida! Utilizar o formato: DD/MM/AAAA."}
        >
        <DateInput 
          value={formData.limitDate}
          onChange={handleTextInput('limitDate', setFormData)}
          onFocus={handleOnFocus('limitDate')}
          onBlur={handleOnBlur('limitDate')}
          error={dateError.limitDate}
        />
        </InputField>
      </DataGrid>
    </FormContent>
    </>
  )
}
