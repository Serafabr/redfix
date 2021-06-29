import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card, CardHeader } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle/CardTitle';
import { SingleCardHeader } from '../../../components/Cards';
import { SingleCardContent } from '../../../components/Cards';
import { FormHeader, FormContent, FormContainer } from '../../../components/Forms';
import { FormSituationType } from '../../../components/Forms/_types';
import { AddSelectBox } from '../../../components/Buttons';

import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/_types';
import { Input, InputField } from '../../../components/Inputs';
import { Dropdown } from '../../../components/Inputs'; 
import { QuickSearch } from '../../../components/Inputs/QuickSearch/QuickSearch';
import { TextArea } from '../../../components/Inputs/TextArea/TextArea';
import { DateInput } from '../../../components/Inputs/DateInput/DateInput';

import { Table } from '../../../components/Tables';

import { DataGrid } from '../../../components/DataDisplays';

import { PlainButton } from '../../../components/Buttons';

import plusIcon from '../../../assets/icons/plus-blue.svg';

export const TaskForm = () => {
  
  const location = useLocation<string>();
  
  return (
    <>
      <TitleArea 
        title={`Cadastrar tarefa`}
        path={location.pathname}
        buttons={[]}
      />
      <FormContainer>
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
                options={{a: {name: "AAAA"}}}
                onSelectItem={()=>{}}
              >
                {(onClick, isOpen) => (
                  <Dropdown 
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
                  <Dropdown 
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
                  <Dropdown 
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
                  <Dropdown 
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
        <FormHeader
          title="Datas e prazos"
          subtitle="Prazos para o ínicio e término da tarefa. Tais informações podem ser preenchidas posteriormente."
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
        <FormHeader
          title="Ativos"
          subtitle="Adicione todos os ativos que serão objetos desta manutenção / serviço."
          badgeText="Etapa 03 de 04"
          situation={FormSituationType.Ok}
        />
        <FormContent marginBottom={true}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <PlainButton icon={plusIcon}>
              Adicionar Ativo
            </PlainButton>
          </div>
          Table
        </FormContent>
        <FormHeader
          title="Arquivos"
          subtitle="O usuário poderá anexar qualquer arquivo, relacionado a esta tarefa, sempre que achar necessário."
          badgeText="Etapa 04 de 04"
          situation={FormSituationType.Ok}
        />
        <FormContent>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <PlainButton icon={plusIcon}>
              Adicionar Arquivo
            </PlainButton>
          </div>
          Table
        </FormContent>
      </FormContainer>
    </>
  )
}
