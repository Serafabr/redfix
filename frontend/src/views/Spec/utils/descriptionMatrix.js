import React from 'react';
import Markdown from 'markdown-to-jsx';

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

export function itemsMatrixGeneral(data) {
  return (
    [
      [
        { id: 'name', title: 'Serviço / Material', description: data.name, span: 1 },
        { id: 'specSf', title: 'Código', description: data.specSf, span: 1 },
      ],
      [
        { id: 'category', title: 'Categoria', description: data.specCategoryText, span: 1 },
        { id: 'version', title: 'Versão', description: data.version, span: 1 },
      ],
      [
        { id: 'subcategory', title: 'Subcategoria', description: data.specSubcategoryText, span: 1 },
        { id: 'catmat', title: 'Catmat / Catser', description: `${data.catmat || "-"} / ${data.catser || "-"}`, span: 1 },
      ],
      [{ id: 'description', title: 'Descrição Detalhada', description: data.description, span: 2 }],
      [{ id: 'description', title: 'Atividades', description: data.activities, span: 2 }],
    ]
  );
}

export function itemsMatrixBalance(array, unit) {
  return (
    [
      [
        {
          id: 'balance',
          title: 'Total Disponível',
          description: `${array ? array.reduce((acc, item) => (Number(item.qtyAvailable) + Number(acc)), 0) : 0} ${unit || ''}`,
          span: 1
        },
        {
          id: 'balance',
          title: 'Maior Preço',
          description: formatter(array ? array.reduce((acc, item) => (Math.max(item.price, acc)), 0) : 0),
          span: 1
        },
        {
          id: 'balance',
          title: 'Menor Preço',
          description: formatter(array ? array.reduce((acc, item) => (Math.min(item.price, acc)), array[0] && array[0].price) : 0),
          span: 1
        },
      ],
    ]
  );
}

export function itemsMatrixTasks(array) {
  return (
    [
      [{
        id: 'tasks',
        title: 'Quantidade de Tarefas',
        description: array.length.toString().padStart(3, "0"),
        span: 1
      }],
    ]
  );
}