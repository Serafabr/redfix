import { useState } from 'react';
// Components
import { FormHeader, FormContent } from "../../../../../components/Forms";
import { DataGrid } from "../../../../../components/DataDisplays";
import { InputField, Input, DropdownButton, TextArea, Dropdown } from "../../../../../components/Inputs";
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
  task?: string | null,
  handleTaskChange?: () => void,
  place?: string | null,
  handlePlaceChange?: () => void,
  description?: string | null,
  handleDescriptionChange?: (id: string) => void,
  categoryId?: string | null,
  handleCategoryChange?: (id: string) => void,
  teamId?: string | null,
  handleTeamChange?: (id: string) => void,
  statusId?: string | null,
  handleStatusChange?: () => void,
  projectId?: string | null,
  handleProjectChange?: () => void,
};

/*************************\
 * PropTypes
\*************************/

type Props = {
  step?: number | null,
  totalSteps?: number | null,
  situation?: FormSituationType | null,
  descriptionData?: InputDescriptionData,
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

const defaultSetter = () => {};

/*************************\
 * TaskDescription Component
\*************************/

export const TaskDescription = ({
  step = 1,
  totalSteps = 1,
  descriptionData = {},
  categoryOptions = defaultOptions,
  teamOptions = defaultOptions,
  statusOptions = defaultOptions,
  projectOptions = defaultOptions,
}: Props) => {
  
  // Input Values
  const {
    task,
    handleTaskChange = defaultSetter,
    place,
    handlePlaceChange = defaultSetter,
    description,
    handleDescriptionChange = defaultSetter,
    categoryId,
    handleCategoryChange = defaultSetter,
    teamId,
    handleTeamChange = defaultSetter,
    statusId,
    handleStatusChange = defaultSetter,
    projectId,
    handleProjectChange = defaultSetter,
    } = descriptionData; 
  
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
            <Dropdown 
              options={categoryOptions}
              onSelectItem={handleCategoryChange}
              boxWidth={250}
              selectedId={categoryId}
            />
          </InputField>
          <InputField
            label="Equipe"
            gridArea="team"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Dropdown 
              options={teamOptions}
              onSelectItem={handleTeamChange}
              boxWidth={250}
              selectedId={teamId}
              searchable={true}
            />
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
