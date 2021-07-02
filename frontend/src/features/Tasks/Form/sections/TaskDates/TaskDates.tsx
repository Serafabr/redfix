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
 * Functions
\*************************/

const checkDateStringOnBlur = (inputId: string, setFunctionObject: any) => (e: React.SyntheticEvent<HTMLInputElement>) => {
  const { value } = e.target as HTMLInputElement;
  
  if (value.length === 0) {
    setFunctionObject[inputId](false);
  } else {
    setFunctionObject[inputId](!isDateStringValid(value));
  }
  
}

const cleanErrorOnFocus = (inputId: string, setFunctionObject: any) => (e: React.SyntheticEvent<HTMLInputElement>) => {
  setFunctionObject[inputId](false);
}

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
  
  const [ formStateError, setFormStateError ] = useErrorFormState(); 
  
  return (
    <>
    <FormHeader
      title="Datas e prazos"
      subtitle="Prazos para o ínicio e término da tarefa. Campos NÃO obrigatórios, tais informações podem ser preenchidas posteriormente."
      situation={situation}
    />
    <FormContent marginBottom={true}>
      <DataGrid className={style.DatesGrid}>
        <InputField
            label="Início da execução"
            gridArea="startDate"
            error={formStateError.startDate}
            errorMessage={"Data inválida! Utilizar o formato: DD/MM/AAAA."}
          >
          <DateInput 
            value={formData.startDate}
            onChange={handleTextInput('startDate', setFormData)}
            onFocus={cleanErrorOnFocus('startDate', setFormStateError)}
            onBlur={checkDateStringOnBlur('startDate', setFormStateError)}
            error={formStateError.startDate}
          />
        </InputField>
        <InputField
          label="Prazo final"
          gridArea="limitDate"
          error={formStateError.limitDate}
          errorMessage={"Data inválida! Utilizar o formato: DD/MM/AAAA."}
        >
        <DateInput 
          value={formData.limitDate}
          onChange={handleTextInput('limitDate', setFormData)}
          onFocus={cleanErrorOnFocus('limitDate', setFormStateError)}
          onBlur={checkDateStringOnBlur('limitDate', setFormStateError)}
          error={formStateError.limitDate}
        />
        </InputField>
      </DataGrid>
    </FormContent>
    </>
  )
}
