import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Billings = React.lazy(() => import("../../features/Billings"));
const Billing = React.lazy(() => import("../../features/Billings/Billing"));
const BillingForm = React.lazy(() => import("../../features/Billings/BillingForm"));

const routes = [
  { path: paths.billings.all, exact: true, name: "Faturamentos", component: Billings },
  { path: paths.billings.one, exact: true, name: "Faturamento", component: Billing },
  { path: paths.billings.createForm, exact: true, name: "Novo faturamento", component: BillingForm },
  { path: paths.billings.updateForm, exact: true, name: "Editar faturamento", component: BillingForm },
];

export default routes;