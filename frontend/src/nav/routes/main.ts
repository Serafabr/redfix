import React from "react";
import { paths } from '../paths';

// MainPage
import MainPage from "./views/MainPage";

// General pages
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const NotFound = React.lazy(() => import("./views/Dashboard"));

const routes = [
  { path: paths.task.all, exact: true, name: "Ordens de serviços", component: Tasks, props: { mode: 'all' } },
  { path: paths.task.one, exact: true, name: "Ordens de serviços", component: Task, props: { mode: 'one' } },
  { path: paths.task.update, exact: true, name: "Ordens de serviços", component: TaskForm, props: { mode: 'update' } },
  { path: paths.task.create, exact: true, name: "Ordens de serviços", component: TaskForm, props: { mode: 'create' } },
];

export default routes;