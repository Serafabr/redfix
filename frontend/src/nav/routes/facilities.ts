import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Facilities = React.lazy(() => import("../../features/Facilities"));
const Facility = React.lazy(() => import("../../features/Facilities/Facility"));
const FacilityForm = React.lazy(() => import("../../features/Facilities/FacilityForm"));

const routes = [
  { path: paths.facilities.createForm, exact: true, name: "Novo edifício", component: FacilityForm },
  { path: paths.facilities.updateForm, exact: true, name: "Editar edifício", component: FacilityForm },
  { path: paths.facilities.one, exact: true, name: "Edifício", component: Facility },
  { path: paths.facilities.all, exact: true, name: "Edifícios", component: Facilities },
];

export default routes;