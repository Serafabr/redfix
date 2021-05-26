import React from 'react';

function createUrlElement(url) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={(e) => e.stopPropagation()}
      className='download-button'
    >
      Baixar Arquivo
    </a>
  );
}

const tableConfig = {
  attForDataId: 'fileId',
  hasCheckbox: false,
  isItemClickable: false,
  isFileTable: true,
  fileColumnWidth: '10%',
  columnsConfig: [
    { columnId: 'name', columnName: 'Nome', width: "40%", align: "justify", isTextWrapped: true, idForValues: ['name', 'user'] },
    { columnId: 'size', columnName: 'Tamanho', width: "15%", align: "center", idForValues: ['size'] },
    { columnId: 'date', columnName: 'Criado em', width: "15%", align: "center", idForValues: ['date'] },
    { columnId: 'url', columnName: 'Download', width: "20%", align: "center", idForValues: ['url'], createElementWithData: createUrlElement },
  ],
};

export default tableConfig;