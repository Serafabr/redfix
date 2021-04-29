import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Plans = React.lazy(() => import("../../features/Plans"));
const Plan = React.lazy(() => import("../../features/Plans/Plan"));
const PlanForm = React.lazy(() => import("../../features/Plans/PlanForm"));

const routes = [
  { path: paths.plans.all, exact: true, name: "Tarefas", component: Plans },
  { path: paths.plans.one, exact: true, name: "Tarefa", component: Plan },
  { path: paths.plans.createForm, exact: true, name: "Nova tarefa", component: PlanForm },
  { path: paths.plans.updateForm, exact: true, name: "Editar tarefa", component: PlanForm },
];

export default routes;