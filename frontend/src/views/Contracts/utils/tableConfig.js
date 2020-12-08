import paths from '../../../paths';
import moment from 'moment';
import 'moment/locale/pt-br';

import React from 'react';

function prepareEndDate(item) {
  return [ moment(item.dateEnd).format("DD/MM/YYYY") ];
}

function prepareStartDate(item) {
  return [ moment(item.dateStart).format("DD/MM/YYYY") ];
}

function createUrlElement(url, item) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={(e) => e.stopPropagation()}
    >
      {item.depotSf}
    </a>
  );
}



const tableConfig = {
  attForDataId: 'depotId',
  hasCheckbox: false,
  isItemClickable: true,
  dataAttForClickable: 'title',
  itemPathWithoutID: paths.contract.toOne,
  prepareData: {
    dateEndText: prepareEndDate,
    dateStartText: prepareStartDate,
  },
  columnsConfig: [
    { columnId: 'depotSf', columnName: 'Número', width: "15%", align: "center", idForValues: ['depotSf'] },
    { columnId: 'title', columnName: 'Objeto', width: "40%", align: "justify", idForValues: ['title', 'company'] },
    { columnId: 'category', columnName: 'Tipo', width: "10%", align: "center", idForValues: ['depotCategoryText'] },
    { columnId: 'dateStart', columnName: 'Início', width: "12%", align: "center", idForValues: ['dateStartText'] },
    { columnId: 'dateEnd', columnName: 'Vigente até', width: "12%", align: "center", idForValues: ['dateEndText'] },
    { columnId: 'url', columnName: 'Link', width: "10%", align: "center", idForValues: ['url'], createElementWithData: createUrlElement },
  ],
};

export default tableConfig;