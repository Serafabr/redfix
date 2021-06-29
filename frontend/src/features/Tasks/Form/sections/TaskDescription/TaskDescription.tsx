// Components
import { FormHeader, FormContent } from "../../../../../components/Forms";
import { DataGrid } from "../../../../../components/DataDisplays";
import { InputField, Input, DropdownButton, TextArea } from "../../../../../components/Inputs";
import { AddSelectBox } from "../../../../../components/Buttons";
// Style
import style from './TaskDescription.module.scss';
// Types
import { FormSituationType } from "../../../../../components/Forms/_types";
import { OptionsType, OptionType } from '../../../../../components/SelectBox/_types';

/*************************\
 * General types
\*************************/

type InputDescriptionData = {
  task?: string,
  place?: string,
  description?: string,
  categoryId?: string,
  teamId?: string,
  statusId?: string,
  projectId?: string,
};

/*************************\
 * PropTypes
\*************************/

type Props = {
  step?: number,
  totalSteps?: number,
  situation?: FormSituationType,
  inputDescriptionData?: InputDescriptionData,
  categoryOptions?: OptionsType,
  teamOptions?: OptionsType,
  statusOptions?: OptionsType,
  projectOptions?: OptionsType,
};

/*************************\
 * Default Types
\*************************/

const defaultOptions = {
  loading: { name: "Carregando opções..." }
}

/*************************\
 * TaskDescription Component
\*************************/

export const TaskDescription = ({
  step,
  totalSteps,
  situation,
  inputDescriptionData = {},
  categoryOptions = defaultOptions,
  teamOptions = defaultOptions,
  statusOptions = defaultOptions,
  projectOptions = defaultOptions,
}: Props) => {
  
  // Input Values
  const {
    task,
    place,
    description,
    categoryId,
    teamId,
    statusId,
    projectId,
  } = inputDescriptionData;
  
  return (
    <>
      <FormHeader
        title="Descrição da tarefa"
        subtitle="Informações essenciais para a execução da tarefa. No campo 'Tarefa' descreva brevemente o serviço que será realizado, enquanto que no campo 'Descrição' faça um detalhamento de tudo o que será necessário."
        badgeText="Etapa 01 de 04"
        situation={FormSituationType.Error}
      />
      <FormContent marginBottom={true}>
        <DataGrid className={style.DescriptionGrid}>
          <InputField
            label="Tarefa"
            gridArea="task"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Input error={false} />
          </InputField>
          <InputField
            label="Localização"
            gridArea="place"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Input error={false} />
          </InputField>
          <InputField
            label="Categoria"
            gridArea="category"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <AddSelectBox
              options={categoryOptions}
              onSelectItem={()=>{}}
              boxWidth={250}
            >
              {(onClick, isOpen) => (
                <DropdownButton 
                  value={"Manutenção Elétrica"}
                  isOpen={isOpen}
                  handleOnClick={onClick}
                  error={false}
                />
              )}
            </AddSelectBox>
          </InputField>
          <InputField
            label="Equipe"
            gridArea="team"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <AddSelectBox
              options={{a: {name: "AAAA"}}}
              onSelectItem={()=>{}}
            >
              {(onClick, isOpen) => (
                <DropdownButton 
                  value={"Coemant"}
                  isOpen={isOpen}
                  handleOnClick={onClick}
                  error={false}
                />
              )}
            </AddSelectBox>
          </InputField>
          <InputField
            label="Status"
            gridArea="status"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <AddSelectBox
              options={{a: {name: "AAAA"}}}
              onSelectItem={()=>{}}
            >
              {(onClick, isOpen) => (
                <DropdownButton 
                  value={"Fila de espera"}
                  isOpen={isOpen}
                  handleOnClick={onClick}
                  error={false}
                />
              )}
            </AddSelectBox>
          </InputField>
          <InputField
            label="Projeto"
            gridArea="project"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <AddSelectBox
              options={{a: {name: "AAAA"}}}
              onSelectItem={()=>{}}
            >
              {(onClick, isOpen) => (
                <DropdownButton 
                  value={"Sem projeto"}
                  isOpen={isOpen}
                  handleOnClick={onClick}
                  error={false}
                />
              )}
            </AddSelectBox>
          </InputField>
          <InputField
            label="Descrição"
            gridArea="desc"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <TextArea />
          </InputField>
        </DataGrid>
      </FormContent>
    </>
  )
}
