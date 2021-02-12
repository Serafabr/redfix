import { CONTRACT_STATUS } from './dataDescription';

export const filterAttributes = {
  company: { name: 'Contratada', type: 'text' },
  contractSf: { name: 'Contrato nº', type: 'text' },
  status: { name: 'Status', type: 'option', options: CONTRACT_STATUS },
  title: { name: 'Título', type: 'text' }
};

export const customFilters = [
  {
    id: "001",
    name: "Sem Filtro",
    author: "webSINFRA Software",
    logic: [],
  },
];