import {
  ORDER_CATEGORY_TYPE,
  ORDER_PRIORITY_TYPE,
  ORDER_STATUS_TYPE
} from '../../../../views/Tasks/utils/dataDescription';

export const filterAttributes = {
  category: { name: 'Categoria', type: 'option', options: ORDER_CATEGORY_TYPE },
  description: { name: 'Descrição', type: 'text' },
  priority: { name: 'Prioridade', type: 'option', options: ORDER_PRIORITY_TYPE },
  status: { name: 'Status', type: 'option', options: ORDER_STATUS_TYPE },
  title: { name: 'Título', type: 'text' },
};

export const customFilters = [
  {
    id: "001",
    name: "Sem Filtro",
    author: "webSINFRA Software",
    logic: [],
  },
];