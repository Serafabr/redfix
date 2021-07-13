// Components
import { FormHeader, FormContent } from "../../../../../components/Forms";
import { DataGrid } from "../../../../../components/DataDisplays";
import { InputField, Input, TextArea, Dropdown } from "../../../../../components/Inputs";
// Functions
import { handleTextInput } from '../../data/handleTextInput';
// Style
import style from './TaskDescription.module.scss';
// Types
import { ApolloError } from "@apollo/client";
import { FormSituationType } from "../../../../../components/Forms/_types";
import { 
  TaskFormStateType, 
  TaskFormSetStateType,
  taskFormStateDefault,
  taskFormSetStateDefault
} from "../../_types";
import { handleOneItemSelection } from '../../../../../components/SelectBox';
// Options for dropdown
import { taskCategories, taskStatus, taskPriorities } from '../../../../../components/Options';
import { IdType, OptionsType } from "../../../../../components/SelectBox/_types";

/*************************\
 * Custom types
\*************************/

type InputDescriptionData = {
  task?: string,
  place?: string,
  description?: string,
  team?: IdType[],
  category?: IdType[],
  priority?: IdType[],
  status?: IdType[],
  project?: IdType[],
};

type InputSetDescriptionData = {
  task: React.Dispatch<string>,
  place: React.Dispatch<string>,
  description: React.Dispatch<string>,
  team: React.Dispatch<Array<IdType>>,
  category: React.Dispatch<Array<IdType>>,
  priority: React.Dispatch<Array<IdType>>,
  status: React.Dispatch<Array<IdType>>,
  project: React.Dispatch<Array<IdType>>,
};

type TeamOptions = {
  data?: OptionsType,
  loading?: boolean,
  error?: ApolloError,
}

type ProjectOptions = {
  data?: OptionsType,
  loading?: boolean,
  error?: ApolloError,
}

/*************************\
 * PropTypes
\*************************/

type Props = {
  situation?: FormSituationType | null,
  formData?: TaskFormStateType,
  setFormData?: TaskFormSetStateType,
  teamOptions?: TeamOptions,
  projectOptions?: ProjectOptions,
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
  data: {},
  loading: false,
  error: undefined,
}

const defaultSetter = () => {};

/*************************\
 * TaskDescription Component
\*************************/

export const TaskDescription = ({
  formData = taskFormStateDefault,
  setFormData = taskFormSetStateDefault,
  teamOptions = defaultOptions,
  projectOptions = defaultOptions,
}: Props) => {
  
  return (
    <>
      <FormHeader
        title="Descrição da tarefa"
        subtitle="Informações essenciais para a execução da tarefa. Todos os campos desta seção, exceto 'Projeto', devem ser obrigatoriamente preenchidos. E, caso necessário, alterações poderão ser realizadas posteriormente."
        step={1}
        totalSteps={3}
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
              options={teamOptions.data}
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
              options={projectOptions.data}
              selectionArray={formData.project}
              onSelectItem={handleOneItemSelection(setFormData.project, formData.project, true)}
              boxWidth={400}
              searchable={true}
              sortItems={true}
              wrapText={true}
              placeholder="Tarefa sem projeto"
            />
          </InputField>
          <InputField
            label="Descrição"
            gridArea="description"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <TextArea 
              className={style.TextArea}
              value={formData.description}
              onChange={handleTextInput('description', setFormData)}
            />
          </InputField>
        </DataGrid>
      </FormContent>
    </>
  )
}
