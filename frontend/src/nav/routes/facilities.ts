import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Facilities = React.lazy(() => import("../../features/Facilities"));
const Facility = React.lazy(() => import("../../features/Facilities/Facility"));
const FacilityForm = React.lazy(() => import("../../features/Facilities/FacilityForm"));

const routes = [
  { path: paths.facilities.all, exact: true, name: "Faturamentos", component: Facilities },
  { path: paths.facilities.one, exact: true, name: "Faturamento", component: Facility },
  { path: paths.facilities.createForm, exact: true, name: "Novo faturamento", component: FacilityForm },
  { path: paths.facilities.updateForm, exact: true, name: "Editar faturamento", component: FacilityForm },
];

export default routes;