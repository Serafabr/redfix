import React from "react";
import { paths } from '../paths';

// MainPage
//import MainPage from "../../features/MainPage";

// Lazy imports
// General pages
const Dashboard = React.lazy(() => import("../../features/Dashboard"));

const routes = [
  //{ path: paths.main.mainPage, exact: true, name: "Página Principal", component: MainPage },
  { path: paths.main.dashboard, name: "Painel", component: Dashboard },
];

export default routes;