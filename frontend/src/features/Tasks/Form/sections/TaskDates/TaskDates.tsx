// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { DataGrid } from '../../../../../components/DataDisplays';
import { InputField, DateInput } from '../../../../../components/Inputs';
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
  const target = e.target as HTMLInputElement;
  setFunctionObject[inputId](isDateStringValid(target.value));
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
  
  return (
    <>
    <FormHeader
      title="Datas e prazos"
      subtitle="Prazos para o ínicio e término da tarefa. Campos NÃO obrigatórios, tais informações podem ser preenchidas posteriormente."
      badgeText={`Etapa ${step} de ${totalSteps}`}
      situation={situation}
    />
    <FormContent marginBottom={true}>
      <DataGrid className={style.DatesGrid}>
        <InputField
            label="Início da execução"
            gridArea="startDate"
            error={false}
            errorMessage={"Data incorreta!"}
          >
          <DateInput 
            value={formData.startDate}
            onChange={handleTextInput('startDate', setFormData)}
            onBlur={(e: any)=>{console.log('onblur', e.target.value)}}
          />
        </InputField>
        <InputField
          label="Prazo final"
          gridArea="limitDate"
          error={false}
          errorMessage={"Valor incorreto!"}
        >
        <DateInput 
          value={formData.limitDate}
          onChange={handleTextInput('limitDate', setFormData)}
        />
        </InputField>
      </DataGrid>
    </FormContent>
    </>
  )
}
