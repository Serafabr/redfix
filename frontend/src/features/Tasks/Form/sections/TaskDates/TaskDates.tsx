// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { DataGrid } from '../../../../../components/DataDisplays';
import { InputField, DateInput } from '../../../../../components/Inputs';
// Functions
import { handleTextInput } from '../../data/handleTextInput';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';
// Style
import style from './TaskDates.module.scss';
import { useFormState } from '../../data/useFormState';

/*************************\
 * General types
\*************************/

type InputDescriptionData = {
  startDate?: number,
  limitDate?: number,
};

type InputSetDescriptionData = {
  startDate: React.Dispatch<number>,
  limitDate: React.Dispatch<number>,
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
          />
        </InputField>
        <InputField
          label="Prazo final"
          gridArea="limitDate"
          error={false}
          errorMessage={"Valor incorreto!"}
        >
        <DateInput />
        </InputField>
      </DataGrid>
    </FormContent>
    </>
  )
}
