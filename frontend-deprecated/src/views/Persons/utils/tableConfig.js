const tableConfig = {
  attForDataId: 'cpf',
  hasCheckbox: true,
  checkboxWidth: '5%',
  isItemClickable: false,
  dataAttForClickable: 'name',
  columnsConfig: [
    { columnId: 'name', columnName: 'Nome', width: "50%", align: "justify", idForValues: ['name'] },
    { columnId: 'phone', columnName: 'Telefone', width: "20%", align: "center", idForValues: ['phone'] },
    { columnId: 'email', columnName: 'E-mail', width: "25%", align: "center", idForValues: ['email'] },
  ],
};

export default tableConfig;