// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { PlainButton } from '../../../../../components/Buttons';
import { EmptyTable } from '../../../../../components/Tables/EmptyTable/EmptyTable';
// Style
import style from './TaskAssets.module.scss';
// Icons
import plusIcon from '../../../../../assets/icons/plus-blue.svg';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';

export const TaskAssets = () => {
  return (
    <>
      <FormHeader
        title="Ativos"
        subtitle="Adicione todos os ativos que serão objetos desta manutenção / serviço. Campo obrigatório. O usuário deverá anexar, pelo menos, UM ativo."
        badgeText="Etapa 03 de 04"
        situation={FormSituationType.Ok}
      />
      <FormContent marginBottom={true}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <PlainButton icon={plusIcon}>
            Adicionar Ativo
          </PlainButton>
        </div>
        <EmptyTable />
      </FormContent>
    </>
  )
}
