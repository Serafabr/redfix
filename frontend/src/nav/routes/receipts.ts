import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Receipts = React.lazy(() => import("../../features/Receipts"));
const Receipt = React.lazy(() => import("../../features/Receipts/Receipt"));
const ReceiptForm = React.lazy(() => import("../../features/Receipts/ReceiptForm"));

const routes = [
  { path: paths.receipts.all, exact: true, name: "Estoques", component: receipts },
  { path: paths.receipts.one, exact: true, name: "Estoque", component: Depot },
  { path: paths.receipts.createForm, exact: true, name: "Novo estoque", component: DepotForm },
  { path: paths.receipts.updateForm, exact: true, name: "Editar estoque", component: DepotForm },
];

export default routes;