import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation } from 'react-router';


import { FormHeader, FormContent, FormContainer } from '../../../components/Forms';
import { FormSituationType } from '../../../components/Forms/_types';


import { TaskDescription } from './sections/TaskDescription/TaskDescription';
import { TaskDates } from './sections/TaskDates/TaskDates';
import { TaskFiles } from './sections/TaskFiles/TaskFiles';

import { Button } from '../../../components/Buttons';

import plusIcon from '../../../assets/icons/plus-blue.svg';
import { OptionsType } from '../../../components/SelectBox/_types';
import { useFormState } from './data/useFormState';

import { TaskAssets } from './sections/TaskAssets/TaskAssets';
import { ButtonType } from '../../../components/Buttons/_types';


const categoryOptions = {
  eletric: { name: 'Manutenção elétrica' },
  paint: { name: 'Pintura' },
  civil: { name: 'Manutenção civil' },
  airCondicioner: { name: 'Manutenção de climatização' },
  mechanic: { name: 'Manutenção mecânica' },
  lifter: { name: 'Manutenção de elevadores' },
  hidraulic: { name: 'Manutenção hidráulica' },
}

const teamOptions: OptionsType = {
  sinfra: { name: 'Sinfra' },
  coemant: { name: 'Coemant' },
  seau: { name: 'Seau' },
  dger: { name: 'Dger' },
  Seplag: { name: 'Seplag' },
  Semac: { name: 'Semac' },
  rcs: { name: 'Rcs Tecnologia - Posto 2' },
  entherm: { name: 'Entherm - Administração' },
  enthermC: { name: 'Entherm - Posto da direção central. Entherm - Posto da direção central.' },
  gabinete12: { name: 'Gabinete Senador Alvaro' },
  gabinete16: { name: 'Gabinete Senador Thiago' },
}

const statusOptions = {
  done: { name: "Concluído" },
  finished: { name: "Finalizado" },
  waiting: { name: "Fila de espera" },
  canceled: { name: "Cancelado" },
  suspensed: { name: "Suspenso" },
  analysing: { name: "Em análise" },
  executing: { name: "Em execução" },
}

const projectOptions = {
  P001: { name: "Projeto n. 001 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P002: { name: "Projeto n. 002 - Reforma das guaritas de entrada do Senado Federal." },
  P003: { name: "Projeto n. 003 - Reforma do gabinete XXX." },
  P004: { name: "Projeto n. 004 - Troca de todos os grupo motores geradores." },
  P005: { name: "Projeto n. 005 - Pintar todas as salas da Sinfra. Fazer o teste em todos os disjutores e todas as lâmpadas. Trocar todos os móveis. Pintura em cores metálicas." },
  P006: { name: "Projeto n. 006 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P007: { name: "Projeto n. 007 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P008: { name: "Projeto n. 008 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P009: { name: "Projeto n. 009 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P010: { name: "Projeto n. 010 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P011: { name: "Projeto n. 011 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P012: { name: "Projeto n. 012 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P013: { name: "Projeto n. 013 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P014: { name: "Projeto n. 014 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P015: { name: "Projeto n. 015 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P016: { name: "Projeto n. 016 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P017: { name: "Projeto n. 017 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
  P018: { name: "Projeto n. 018 - Projetar a troca de todas as lâmpadas do gabinete ZZZZ." },
}

export const TaskForm = () => {
  
  const location = useLocation<string>();
  
  const [ formState, setFormState ] = useFormState();
  
  return (
    <>
      <TitleArea 
        title={`Cadastrar tarefa`}
        path={location.pathname}
        buttons={[]}
      />
      <FormContainer>
        {/* Task Description Section */}
        <TaskDescription 
          formData={formState}
          setFormData={setFormState}
          categoryOptions={categoryOptions}
          teamOptions={teamOptions}
          projectOptions={projectOptions}
          statusOptions={statusOptions}
        />
        {/* Task Dates Section */}
        <TaskDates 
          formData={formState}
          setFormData={setFormState}
        />
        {/* Task Assets Section */}
        <TaskAssets />
        {/* Task Assets Section */}
        <TaskFiles />
      </FormContainer>
      <div className={style.ForwardBox}>
        <div className={style.ButtonWrapper}>
          <Button 
            text="Cancelar"
            buttonType={ButtonType.Secondary}
          />
        </div>
        <div>
          <Button 
            text="Cadastrar tarefa"
          />
        </div>
      </div>
    </>
  )
}
