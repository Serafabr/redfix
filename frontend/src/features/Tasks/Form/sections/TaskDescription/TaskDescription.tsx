import { useState } from 'react';
// Components
import { FormHeader, FormContent } from "../../../../../components/Forms";
import { DataGrid } from "../../../../../components/DataDisplays";
import { InputField, Input, DropdownButton, TextArea, Dropdown } from "../../../../../components/Inputs";
import { AddSelectBox } from "../../../../../components/SelectBox";
// Style
import style from './TaskDescription.module.scss';
// Types
import { FormSituationType } from "../../../../../components/Forms/_types";
import { OptionsType, OptionType, OnSelectItemType } from '../../../../../components/SelectBox/_types';
import { handleOneItemSelection } from '../../../../../components/SelectBox';

/*************************\
 * General types
\*************************/

type InputDescriptionData = {
  task?: string,
  setTask?: React.Dispatch<string>,
  place?: string,
  setPlace?: React.Dispatch<string>,
  description?: string,
  setDescription?: React.Dispatch<string>,
  category?: string[],
  setCategory?: React.Dispatch<Array<string>>,
  team?: string[],
  setTeam?: React.Dispatch<Array<string>>,
  status?: string[],
  setStatus?: React.Dispatch<Array<string>>,
  project?: string[],
  setProject?: React.Dispatch<Array<string>>,
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
    setTask = defaultSetter,
    place,
    setPlace = defaultSetter,
    description,
    setDescription = defaultSetter,
    category,
    setCategory = defaultSetter,
    team,
    setTeam = defaultSetter,
    status,
    setStatus = defaultSetter,
    project,
    setProject = defaultSetter,
    } = descriptionData; 
  
  return (
    <>
      <FormHeader
        title="Descrição da tarefa"
        subtitle="Informações essenciais para a execução da tarefa. Todos os campos desta seção, exceto 'Projeto', são obrigatórios."
        badgeText="Etapa 01 de 04"
        situation={FormSituationType.Error}
      />
      <FormContent marginBottom={true}>
        <DataGrid className={style.DescriptionGrid}>
          <InputField
            label="Tarefa (descrição breve)"
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
              selectionArray={category}
              onSelectItem={handleOneItemSelection(setCategory)}
              boxWidth={250}
              sortItems={true}
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
              selectionArray={team}
              onSelectItem={handleOneItemSelection(setTeam)}
              boxWidth={250}
              searchable={true}
              sortItems={true}
            />
          </InputField>
          <InputField
            label="Status"
            gridArea="status"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Dropdown 
              options={statusOptions}
              selectionArray={status}
              onSelectItem={handleOneItemSelection(setStatus)}
              boxWidth={250}
              searchable={false}
              sortItems={true}
            />
          </InputField>
          <InputField
            label="Projeto"
            gridArea="project"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Dropdown 
              options={projectOptions}
              selectionArray={project}
              onSelectItem={handleOneItemSelection(setProject)}
              boxWidth={400}
              searchable={true}
            />
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
