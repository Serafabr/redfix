import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Monitors = React.lazy(() => import("../../features/Monitors"));
const Monitor = React.lazy(() => import("../../features/Monitors/Monitor"));
const MonitorForm = React.lazy(() => import("../../features/Monitors/MonitorForm"));

const routes = [
  { path: paths.monitors.createForm, exact: true, name: "Novo monitor", component: MonitorForm },
  { path: paths.monitors.updateForm, exact: true, name: "Editar monitor", component: MonitorForm },
  { path: paths.monitors.one, exact: true, name: "Monitor", component: Monitor },
  { path: paths.monitors.all, exact: true, name: "Monitores", component: Monitors },
];

export default routes;