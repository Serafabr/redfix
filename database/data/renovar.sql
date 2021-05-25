begin;

select api.create_firm(
  'Renovar',
  '07474287000130',
  'Renovar Engenharia Ltda.'
) as renovar_firm_id \gset

select api.create_depot(
  'CT 20210030',
  1,
  'Manutenção Civil',
  'Prestação de serviços contínuos e sob de manda referentes à manutenção preventiva, corretiva e preditiva dos sistemas construtivos e prediais do Complexo Arquitetônico do Senado Federal e das Residências Oficiais, relativos à manutenção de revestimento, vedação, forro, pintura, pavimentação viária, vidraçaria, impermeabilização, estruturas, fundações sede infraestruturas civis, com o fornecimento de materiais, mão de obra, ferramentas e serviços sob de manda necessários à execução do objeto, durante 30 (trinta) meses consecutivos.',
  null,
  :renovar_firm_id::integer,
  20,
  20,
  '2021-04-28',
  '2021-04-29',
  '2021-04-28',
  '2023-10-27',
  null,
  '00200004234202021'
) as renovar_depot_id \gset

-- supplies
insert into supply_prices values (default, (select api.create_supply('sf', :renovar_depot_id::integer, 'name', 2, 1, true)), 20, 9.99, '2021-04-28', null);

-- allocations

commit;
