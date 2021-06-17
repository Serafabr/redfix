import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Projects = React.lazy(() => import("../../features/Projects"));
const Project = React.lazy(() => import("../../features/Projects/Project"));
const ProjectForm = React.lazy(() => import("../../features/Projects/ProjectForm"));

const routes = [
  { path: paths.projects.createForm, exact: true, name: "Nova tarefa", component: ProjectForm },
  { path: paths.projects.updateForm, exact: true, name: "Editar tarefa", component: ProjectForm },
  { path: paths.projects.one, exact: true, name: "Tarefa", component: Project },
  { path: paths.projects.all, exact: true, name: "Tarefas", component: Projects },
];

export default routes;