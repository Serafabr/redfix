import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';

export function itemsMatrixGeneral(data) {
  return (
    [
      [{ id: 'facility', title: 'Nome do Edifício ou Área', description: data.name, span: 1 }, { id: 'department', title: 'Departamento (s)', description: data.department, line: 1, span: 1 },],
      [{ id: 'code', title: 'Código', description: data.assetSf, span: 1 }],
      [{ id: 'description', title: 'Descrição do Edifício', description: data.description, span: 2 }]
    ]
  );
}

export function itemsMatrixLocation(data) {
  return (
    [
      [
        { id: 'facilityParent', title: 'Ativo Pai', description: data.superior, span: 1 },
        { id: 'latitude', title: 'Latitude do Local', description: data.latitude, line: 1, span: 1 },
      ],
      [
        { id: 'area', title: 'Área', description: data.area, span: 1 },
        { id: 'longitude', title: 'Longitude do Local', description: data.longitude, line: 1, span: 1 },
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
            ), line: 1, span: 1, style: { display: "flex", alignItems: "flex-end" }
        },
      ],
    ]
  );
}