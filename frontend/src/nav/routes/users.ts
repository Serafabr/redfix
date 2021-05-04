import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Users = React.lazy(() => import("../../features/Users"));
const User = React.lazy(() => import("../../features/Users/User"));
const UserForm = React.lazy(() => import("../../features/Users/UserForm"));

const routes = [
  { path: paths.users.all, exact: true, name: "Usuários", component: Users },
  { path: paths.users.one, exact: true, name: "Usuário", component: User },
  { path: paths.users.createForm, exact: true, name: "Novo usuário", component: UserForm },
  { path: paths.users.updateForm, exact: true, name: "Editar usuário", component: UserForm },
];

export default routes;