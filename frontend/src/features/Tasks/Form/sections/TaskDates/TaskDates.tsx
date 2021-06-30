// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { DataGrid } from '../../../../../components/DataDisplays';
import { InputField, DateInput } from '../../../../../components/Inputs';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';

// Style
import style from './TaskDates.module.scss';

export const TaskDates = () => {
  return (
    <>
    <FormHeader
      title="Datas e prazos"
      subtitle="Prazos para o ínicio e término da tarefa. Campos NÃO obrigatórios, tais informações podem ser preenchidas posteriormente."
      badgeText="Etapa 02 de 04"
      situation={FormSituationType.Ok}
    />
    <FormContent marginBottom={true}>
      <DataGrid className={style.DatesGrid}>
        <InputField
            label="Início da execução"
            gridArea="startDate"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
          <DateInput />
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
