import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';

export function itemsMatrixGeneral(data) {
  return (
    [
      [
        { id: 'appliance', title: 'Equipamento', description: data.name, span: 1 },
        { id: 'serial', title: 'Número Serial', description: data.serial, line: 1, span: 1 },
      ],
      [
        { id: 'id', title: 'Código', description: data.assetSf, span: 1 },
        { id: 'price', title: 'Preço', description: data.price, line: 1, span: 1 },
      ],
      [{ id: 'model', title: 'Modelo', description: data.model, span: 1 }],
    ]
  );
}

export function itemsMatrixManufacturer(data) {
  return (
    [
      [
        { id: 'manufacturer', title: 'Empresa Fabricante', description: data.manufacturer, span: 1 },
        { id: 'phone', title: 'Telefone', description: data.phoneManufacturer, line: 1, span: 1 },
      ],
      [
        { id: 'city', title: 'Cidade', description: data.cityManufacturer, span: 1 },
        { id: 'email', title: 'E-mail', description: data.email, line: 1, span: 1 },
      ],
    ]
  );
}

export function itemsMatrixParent(data) {
  return (
    [
      [
        { id: 'parent', title: 'Nome do Equipamento', description: data.parent, span: 1 },
      ],
      [
        { id: 'parentId', title: 'Código', description: data.parentId, span: 1 },
      ],
    ]
  );
}

export function itemsMatrixReport(data) {
  return (
    [
      [
        { id: 'unsettledMaintenance', title: 'Manutenções Pendentes', description: '0000', span: 1 },
        { id: 'prevent', title: 'Preventivas Agendadas', description: 'OS-0021 / OS-0025', line: 1, span: 1 },
      ],
      [
        { id: 'totalMaintenance', title: 'Manutenções Totais', description: '0000', span: 1 },
        { id: 'forAnaylsis', title: 'Requisições para Análise', description: 'RQ-0011 / RQ-0015', line: 1, span: 1 },
      ],
    ]
  );
}

export function itemsMatrixMaintenance(data) {
  return (
    [
      [
        { id: 'parentAssets', title: 'Ativos Filhos Incluídos', description: 'Não', span: 1 },
        {
          id: 'includeAssets', elementGenerator: () =>
            (
              <FormGroup style={{ margin: "0" }}>
                <CustomInput disabled type="switch" id="child-assets" name="customSwitch" label="Incluir ativos filhos" />
              </FormGroup>
            ), span: 1, style: { display: "flex", alignItems: "flex-end" }
        },
      ],
    ]
  );
}