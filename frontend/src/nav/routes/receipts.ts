import React from "react";
import { paths } from '../paths';

// Lazy imports - Components
const Receipts = React.lazy(() => import("../../features/Receipts"));
const Receipt = React.lazy(() => import("../../features/Receipts/Receipt"));
const ReceiptForm = React.lazy(() => import("../../features/Receipts/ReceiptForm"));

const routes = [
  { path: paths.receipts.createForm, exact: true, name: "Novo estoque", component: ReceiptForm },
  { path: paths.receipts.updateForm, exact: true, name: "Editar estoque", component: ReceiptForm },
  { path: paths.receipts.one, exact: true, name: "Estoque", component: Receipt },
  { path: paths.receipts.all, exact: true, name: "Estoques", component: Receipts },
];

export default routes;