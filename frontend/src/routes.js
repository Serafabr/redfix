import React from "react";
import MainPage from "./views/MainPage";
import paths from './paths';

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Login = React.lazy(() => import("./views/Authentication/Login"));
const Profile = React.lazy(() => import("./views/Authentication/Profile"));

const Facilities = React.lazy(() => import("./views/Facilities/Facilities"));
const Facility = React.lazy(() => import("./views/Facility/Facility"));
const FacilityForm = React.lazy(() => import("./views/FacilityForm/FacilityForm"));

const Appliances = React.lazy(() => import("./views/Appliances/Appliances"));
const Appliance = React.lazy(() => import("./views/Appliance/Appliance"));
const ApplianceForm = React.lazy(() => import("./views/ApplianceForm/ApplianceForm"));

const Tasks = React.lazy(() => import("./views/Tasks/Tasks"));
const Task = React.lazy(() => import("./views/Task/Task"));
const TaskForm = React.lazy(() => import("./views/TaskForm/TaskForm"));

const Contracts = React.lazy(() => import("./views/Contracts/Contracts"));
const Contract = React.lazy(() => import("./views/Contract/Contract"));

const Specs = React.lazy(() => import("./views/Specs/Specs"));
const Spec = React.lazy(() => import("./views/Spec/Spec"));

const Teams = React.lazy(() => import("./views/Teams/Teams"));

const Persons = React.lazy(() => import("./views/Persons/Persons"));

const NoView = <h1>NoView!</h1>

const routes = [
  { path: '/', exact: true, name: "Página Principal", component: MainPage },
  { path: '/painel', name: "Painel", component: Dashboard },
  { path: "/login", name: "Login", component: Login },
  { path: "/perfil", name: "Perfil", component: Profile },

  // Facility
  { path: paths.facility.all, exact: true, name: "Edifícios", component: Facilities, props: { mode: 'all' } },
  { path: paths.facility.one, exact: true, name: "Edifício", component: Facility, props: { mode: 'one' } },
  { path: paths.facility.update, exact: true, name: "Edifício", component: FacilityForm, props: { mode: 'update' } },
  { path: paths.facility.create, exact: true, name: "Novo Edificio", component: FacilityForm, props: { mode: 'create' } },

  // Appliance
  { path: paths.appliance.all, exact: true, name: "Equipamentos", component: Appliances, props: { mode: 'all' } },
  { path: paths.appliance.one, exact: true, name: "Equipamento", component: Appliance, props: { mode: 'one' } },
  { path: paths.appliance.update, exact: true, name: "Equipamento", component: ApplianceForm, props: { mode: 'update' } },
  { path: paths.appliance.create, exact: true, name: "Novo Equipamento", component: ApplianceForm, props: { mode: 'create' } },

  // Task
  { path: paths.task.all, exact: true, name: "Ordens de serviços", component: Tasks, props: { mode: 'all' } },
  { path: paths.task.one, exact: true, name: "Ordens de serviços", component: Task, props: { mode: 'one' } },
  { path: paths.task.update, exact: true, name: "Ordens de serviços", component: TaskForm, props: { mode: 'update' } },
  { path: paths.task.create, exact: true, name: "Ordens de serviços", component: TaskForm, props: { mode: 'create' } },

  // Contract
  { path: paths.contract.all, exact: true, name: "Contratos", component: Contracts, props: { mode: 'all' } },
  { path: paths.contract.one, exact: true, name: "Contrato", component: Contract, props: { mode: 'one' } },
  { path: paths.contract.update, exact: true, name: "Contrato", component: Contract, props: { mode: 'update' } },
  { path: paths.contract.create, exact: true, name: "Contrato", component: Contract, props: { mode: 'create' } },

  // Spec
  { path: paths.spec.all, exact: true, name: "Servicos", component: Specs, props: { mode: 'all' } },
  { path: paths.spec.one, exact: true, name: "Servico", component: Spec, props: { mode: 'one' } },
  { path: paths.spec.update, exact: true, name: "Servico", component: Spec, props: { mode: 'update' } },
  { path: paths.spec.create, exact: true, name: "Servico", component: Spec, props: { mode: 'create' } },

  // Team
  { path: paths.team.all, exact: true, name: "Grupos", component: Teams, props: { mode: 'all' } },
  { path: paths.team.one, exact: true, name: "Grupo", component: NoView, props: { mode: 'one' } },
  { path: paths.team.update, exact: true, name: "Grupo", component: NoView, props: { mode: 'update' } },
  { path: paths.team.create, exact: true, name: "Grupo", component: NoView, props: { mode: 'create' } },

  // Person
  { path: paths.person.all, exact: true, name: "Pessoas", component: Persons, props: { mode: 'all' } },
  { path: paths.person.one, exact: true, name: "Pessoas", component: NoView, props: { mode: 'one' } },
  { path: paths.person.update, exact: true, name: "Pessoas", component: NoView, props: { mode: 'update' } },
  { path: paths.person.create, exact: true, name: "Pessoas", component: NoView, props: { mode: 'create' } },
];

export default routes;
