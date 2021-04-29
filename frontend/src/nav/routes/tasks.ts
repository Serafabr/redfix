import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Tasks = React.lazy(() => import("../../features/Tasks"));
const Task = React.lazy(() => import("../../features/Tasks/Task"));
const TaskForm = React.lazy(() => import("../../features/Tasks/TaskForm"));

const routes = [
  { path: paths.tasks.all, exact: true, name: "Tarefas", component: Tasks },
  { path: paths.tasks.one, exact: true, name: "Tarefa", component: Task },
  { path: paths.tasks.createForm, exact: true, name: "Nova tarefa", component: TaskForm },
  { path: paths.tasks.updateForm, exact: true, name: "Editar tarefa", component: TaskForm },
];

export default routes;