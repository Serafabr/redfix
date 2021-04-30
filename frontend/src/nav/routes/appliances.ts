import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Appliances = React.lazy(() => import("../../features/Appliances"));
const Appliance = React.lazy(() => import("../../features/Appliances/Appliance"));
const ApplianceForm = React.lazy(() => import("../../features/Appliances/ApplianceForm"));

const routes = [
  { path: paths.appliances.all, exact: true, name: "Equipamentos", component: Appliances },
  { path: paths.appliances.one, exact: true, name: "Equipamento", component: Appliance },
  { path: paths.appliances.createForm, exact: true, name: "Novo equipamento", component: ApplianceForm },
  { path: paths.appliances.updateForm, exact: true, name: "Editar equipamento", component: ApplianceForm },
];

export default routes;