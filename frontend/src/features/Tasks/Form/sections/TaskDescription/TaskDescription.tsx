import { useState } from 'react';
// Components
import { FormHeader, FormContent } from "../../../../../components/Forms";
import { DataGrid } from "../../../../../components/DataDisplays";
import { InputField, Input, DropdownButton, TextArea, Dropdown } from "../../../../../components/Inputs";
import { AddSelectBox } from "../../../../../components/SelectBox";
// Functions
import { handleTextInput } from '../../data/handleTextInput';
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
  place?: string,
  description?: string,
  category?: string[],
  team?: string[],
  status?: string[],
  project?: string[],
};

type InputSetDescriptionData = {
  task: React.Dispatch<string>,
  place: React.Dispatch<string>,
  description: React.Dispatch<string>,
  category: React.Dispatch<Array<string>>,
  team: React.Dispatch<Array<string>>,
  status: React.Dispatch<Array<string>>,
  project: React.Dispatch<Array<string>>,
};

/*************************\
 * PropTypes
\*************************/

type Props = {
  step?: number | null,
  totalSteps?: number | null,
  situation?: FormSituationType | null,
  descriptionData?: InputDescriptionData,
  setDescriptionData?: InputSetDescriptionData,
  categoryOptions?: OptionsType,
  teamOptions?: OptionsType,
  statusOptions?: OptionsType,
  projectOptions?: OptionsType,
};

/*************************\
 * Default props
\*************************/

const defeaultSetDescriptionData = {
  task: () => {},
  place: () => {},
  description: () => {},
  category: () => {},
  team: () => {},
  status: () => {},
  project: () => {},
}

const defaultDescriptionData = {
  task: '',
  place: '',
  description: '',
  category: [],
  team: [],
  status: [],
  project: [],
}

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
  descriptionData = defaultDescriptionData,
  setDescriptionData = defeaultSetDescriptionData,
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
    category,
    team,
    status,
    project,
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
            <Input 
              onChange={handleTextInput('task', setDescriptionData)}
              error={false}
            />
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
              onSelectItem={handleOneItemSelection(setDescriptionData.category)}
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
              onSelectItem={handleOneItemSelection(setDescriptionData.team)}
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
              onSelectItem={handleOneItemSelection(setDescriptionData.status)}
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
              onSelectItem={handleOneItemSelection(setDescriptionData.project)}
              boxWidth={400}
              searchable={true}
              sortItems={true}
              wrapText={true}
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
