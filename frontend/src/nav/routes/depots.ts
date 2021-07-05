import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Depots = React.lazy(() => import("../../features/Depots"));
const Depot = React.lazy(() => import("../../features/Depots/Depot"));
const DepotForm = React.lazy(() => import("../../features/Depots/DepotForm"));

const routes = [
  { path: paths.depots.createForm, exact: true, name: "Novo estoque", component: DepotForm },
  { path: paths.depots.updateForm, exact: true, name: "Editar estoque", component: DepotForm },
  { path: paths.depots.one, exact: true, name: "Estoque", component: Depot },
  { path: paths.depots.all, exact: true, name: "Estoques", component: Depots },
];

export default routes;