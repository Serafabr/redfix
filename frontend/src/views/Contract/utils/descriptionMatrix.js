import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format;

export function itemsMatrixGeneral(data) {
  return (
    [
      [
        { id: 'title', title: 'Objeto', description: data.title, span: 1 },
        { id: 'type', title: 'Tipo', description: data.depotCategoryText, span: 1 },
      ],
      [
        { id: 'depotSf', title: 'Código do Estoque', description: data.depotSf, span: 1 },
        { id: 'manager', title: 'Fiscal', description: "Sinfra", span: 1 },
      ],
      [
        { id: 'company', title: 'Empresa', description: data.company, span: 1 },
      ],
      [
        { id: 'description', title: 'Descrição', description: data.description, span: 2 }
      ],
    ]
  );
}

export function itemsMatrixDate(data) {
  return (
    [
      [
        { id: 'dateStart', title: 'Início da Vigência', description: data.dateStart && moment(data.dateStart).format("DD/MM/YYYY"), span: 1 },
        { id: 'dateSign', title: 'Data da Assinatura', description: data.dateSign && moment(data.dateSign).format("DD/MM/YYYY"), span: 1 },
      ],
      [
        { id: 'dateEnd', title: 'Final da Vigência', description: data.dateEnd && moment(data.dateEnd).format("DD/MM/YYYY"), span: 1 },
        { id: 'datePub', title: 'Data da Publicação', description: data.datePub && moment(data.datePub).format("DD/MM/YYYY"), span: 1 },
      ],
    ]
  );
}

export function itemsMatrixDocs(data) {
  return (
    [
      [
        { id: 'url', title: 'Link para Contrato', description: data.url, span: 1 },
      ],
    ]
  );
}

export function itemsMatrixMaterial(data) {
  const totalValue = data.reduce((acc, supply) => (acc + supply.qtyInitial * supply.price), 0);
  const spentValue = data.reduce((acc, supply) => (acc + (supply.qtyConsumed + supply.qtyBlocked) * supply.price), 0);
  const balanceValue = totalValue - spentValue;

  return (
    [
      [
        { id: 'totalValue', title: 'Valor Inicial', description: formatter(totalValue), span: 1 },
        { id: 'spentValue', title: 'Total Gasto', description: formatter(spentValue), span: 1 },
        { id: 'balanceValue', title: 'Saldo', description: formatter(balanceValue), span: 1 },
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