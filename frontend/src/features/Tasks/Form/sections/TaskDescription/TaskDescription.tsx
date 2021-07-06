import { useState } from 'react';
// Components
import { FormHeader, FormContent } from "../../../../../components/Forms";
import { DataGrid } from "../../../../../components/DataDisplays";
import { InputField, Input, TextArea, Dropdown } from "../../../../../components/Inputs";
// Functions
import { handleTextInput } from '../../data/handleTextInput';
// Style
import style from './TaskDescription.module.scss';
// Types
import { FormSituationType } from "../../../../../components/Forms/_types";
import { OptionsType, OptionType, OnSelectItemType } from '../../../../../components/SelectBox/_types';
import { handleOneItemSelection } from '../../../../../components/SelectBox';
// Options for dropdown
import { taskCategories, taskStatus, taskPriorities } from '../../../../../components/Options';

/*************************\
 * General types
\*************************/

type InputDescriptionData = {
  task?: string,
  place?: string,
  description?: string,
  team?: string[],
  category?: string[],
  priority?: string[],
  status?: string[],
  project?: string[],
};

type InputSetDescriptionData = {
  task: React.Dispatch<string>,
  place: React.Dispatch<string>,
  description: React.Dispatch<string>,
  team: React.Dispatch<Array<string>>,
  category: React.Dispatch<Array<string>>,
  priority: React.Dispatch<Array<string>>,
  status: React.Dispatch<Array<string>>,
  project: React.Dispatch<Array<string>>,
};

/*************************\
 * PropTypes
\*************************/

type Props = {
  situation?: FormSituationType | null,
  formData?: InputDescriptionData,
  setFormData?: InputSetDescriptionData,
  categoryOptions?: OptionsType,
  teamOptions?: OptionsType,
  statusOptions?: OptionsType,
  projectOptions?: OptionsType,
};

/*************************\
 * Default Types
\*************************/

const defeaultSetDescriptionData = {
  task: () => {},
  place: () => {},
  description: () => {},
  team: () => {},
  category: () => {},
  priority: () => {},
  status: () => {},
  project: () => {},
}

const defaultDescriptionData = {
  task: '',
  place: '',
  description: '',
  team: [],
  category: [],
  priority: [],
  status: [],
  project: [],
}

const defaultOptions = {
  loading: { name: "Carregando opções..." }
}

const defaultSetter = () => {};

/*************************\
 * TaskDescription Component
\*************************/

export const TaskDescription = ({
  formData = defaultDescriptionData,
  setFormData = defeaultSetDescriptionData,
  categoryOptions = defaultOptions,
  teamOptions = defaultOptions,
  statusOptions = defaultOptions,
  projectOptions = defaultOptions,
}: Props) => {
  
  return (
    <>
      <FormHeader
        title="Descrição da tarefa"
        subtitle="Informações essenciais para a execução da tarefa. Todos os campos desta seção, exceto 'Projeto', devem ser obrigatoriamente preenchidos. E, caso necessário, alterações poderão ser realizadas posteriormente."
        step={1}
        totalSteps={4}
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
              value={formData.task}
              onChange={handleTextInput('task', setFormData)}
              error={false}
            />
          </InputField>
          <InputField
            label="Localização"
            gridArea="place"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Input 
              value={formData.place}
              onChange={handleTextInput('place', setFormData)}
              error={false} 
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
              selectionArray={formData.team}
              onSelectItem={handleOneItemSelection(setFormData.team)}
              boxWidth={250}
              searchable={true}
              sortItems={true}
            />
          </InputField>
          <InputField
            label="Categoria"
            gridArea="category"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Dropdown 
              options={taskCategories}
              selectionArray={formData.category}
              onSelectItem={handleOneItemSelection(setFormData.category)}
              boxWidth={250}
              sortItems={true}
            />
          </InputField>
          <InputField
            label="Prioridade"
            gridArea="priority"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Dropdown 
              options={taskPriorities}
              selectionArray={formData.priority}
              onSelectItem={handleOneItemSelection(setFormData.priority)}
              boxWidth={250}
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
              options={taskStatus}
              selectionArray={formData.status}
              onSelectItem={handleOneItemSelection(setFormData.status)}
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
              selectionArray={formData.project}
              onSelectItem={handleOneItemSelection(setFormData.project, formData.project, true)}
              boxWidth={400}
              searchable={true}
              sortItems={true}
              wrapText={true}
              placeholder="Sem projeto"
            />
          </InputField>
          <InputField
            label="Descrição"
            gridArea="description"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <TextArea 
              value={formData.description}
              onChange={handleTextInput('description', setFormData)}
            />
          </InputField>
        </DataGrid>
      </FormContent>
    </>
  )
}
