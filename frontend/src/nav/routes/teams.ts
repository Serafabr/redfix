import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Teams = React.lazy(() => import("../../features/Teams"));
const Team = React.lazy(() => import("../../features/Teams/Team"));
const TeamForm = React.lazy(() => import("../../features/Teams/TeamForm"));

const routes = [
  { path: paths.teams.all, exact: true, name: "Equipes", component: Teams },
  { path: paths.teams.one, exact: true, name: "Equipe", component: Team },
  { path: paths.teams.createForm, exact: true, name: "Nova equipe", component: TeamForm },
  { path: paths.teams.updateForm, exact: true, name: "Editar equipe", component: TeamForm },
];

export default routes;