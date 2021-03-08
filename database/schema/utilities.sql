drop table if exists water_bills cascade;
drop table if exists water_meter_assets cascade;
drop table if exists water_meters cascade;
drop table if exists energy_bills cascade;
drop table if exists energy_meter_assets cascade;
drop table if exists energy_meters cascade;

create table water_meters (
  water_meter_id integer primary key,
  water_meter_sf text not null,
  description text not null
);

create table water_meter_assets (
  water_meter_id integer not null references water_meters (water_meter_id),
  asset_id integer not null references assets (asset_id)
);

create table water_bills (
  water_meter_id integer not null references water_meters (water_meter_id),
  year integer not null,
  month integer not null check (month >= 1 and month <= 12),
  leitura_atual integer not null,
  data_leitura_atual date not null,
  leitura_anterior integer not null,
  data_leitura_anterior date not null,
  consumo_medio integer not null,
  consumo_faturado integer not null,
  valor_esgoto numeric not null,
  valor_agua numeric not null,
  note text,
  primary key (water_meter_id, year, month)
);

create table energy_meters (
  energy_meter_id integer primary key,
  energy_meter_sf text not null,
  description text not null
);

create table energy_meter_assets (
  energy_meter_id integer not null references energy_meters (energy_meter_id),
  asset_id integer not null references assets (asset_id)
);

create table energy_bills (
  -- CLIENTE
  cliente text,
  -- T.
  t text,
  -- DES.CODFAT
  descodfat text,
  -- NOME
  nome text,
  -- CPF/CNPJ
  cpfcnpj text,
  -- ENDERECO
  endereco text,
  -- CIDADE
  cidade text,
  -- UF
  uf text,
  -- CEP
  cep text,
  -- D
  d text,
  -- MEDIDOR
  medidor text,
  -- FATORMU
  fatormu text,
  -- MES.FT
  mesft text,
  -- DT.LT.AN
  dtltan text,
  -- LEIT.ANT
  leitant text,
  -- DT.LT.AT
  dtltat text,
  -- LEIT.ATU
  leitatu text,
  -- DIA
  dia text,
  -- DT.APRES
  dtapres text,
  -- DT.VENCI
  dtvenci text,
  -- VAL.CON.FAT
  valconfat text,
  -- VALOR.ICMS
  valoricms text,
  -- ALIQU.ICMS
  aliquicms text,
  -- VALOR.CIP
  valorcip text,
  -- RET.COFINS
  retcofins text,
  -- RETEN.IRRF
  retenirrf text,
  -- RETEN.CSLL
  retencsll text,
  -- RETEN.PIS
  retenpis text,
  -- VAL.ACR.MOR
  valacrmor text,
  -- VAL.DIV.ACR
  valdivacr text,
  -- VAL.DIV.DES
  valdivdes text,
  -- VAL.BASECAL
  valbasecal text,
  -- VAL.TRIBUTO
  valtributo text,
  -- VAL.ENERGIA
  valenergia text,
  -- VAL.ENC.SET
  valencset text,
  -- VAL.TRANSMI
  valtrasmi text,
  -- VAL.DISTRIB
  valdistrib text,
  -- VAL.TOT.LIQ
  valtotliq text,
  -- VAL.TOT.BRU
  valtotbru text,
  -- CONS.MED
  consmed text,
  -- CONS.FAT
  consfat text,
  -- MD.A.KWH
  mdakwh text,
  -- DES.CONJ.ELETR
  desconjeletr text,
  -- MES.RE
  mesre text,
  -- DIC.APUR
  dicapur text,
  -- FIC.APUR
  ficapur text,
  -- DMICAPUR
  dmicapur text,
  -- DIC.META
  dicmeta text,
  -- FIC.META
  ficmeta text,
  -- DMICMETA
  dmimeta text,
  -- FT.POT
  ftpot text,
  -- FTPOTP
  ftpotp text,
  -- FTPOFP
  ftpotfp text,
  -- CON.FT.P
  conftp text,
  -- CON.FTFP
  conftfp text,
  -- DEMAN.MD
  demanmd text,
  -- DEMA.M.P
  demamp text,
  -- DEM.M.FP
  demmfp text,
  -- DEMAN.FT
  demanft text,
  -- DEM.FT.P
  demftp text,
  -- DE.FT.FP
  deftfp text,
  -- EX.R.CON
  exrcon text,
  -- EX.R.C.P
  exrcp text,
  -- EX.R.CFP
  exrcfp text,
  -- EX.R.DEM
  exrdem text,
  -- EX.R.DMP
  exrdmp text,
  -- EX.RDMFP
  exrdmfp text,
  -- VAL.EXCONSU
  valexrconsu text,
  -- VAL.EXCON.P
  valexconp text,
  -- VAL.EXCONFP
  valexconfp text,
  -- VAL.CONFT.P
  valconftp text,
  -- VAL.CONFTFP
  valconftfp text,
  -- VAL.EXC.DEM
  valexcdem text,
  -- VAL.EXCDEMP
  valexcdemp text,
  -- VAL.EXDEMFP
  valexdemfp text,
  -- VAL.DEM.FAT
  valdemfat text,
  -- VAL.DEMFT.P
  valdemftp text,
  -- VAL.DEMFTFP
  valdemftfp text,
  -- VAL.DEM.ULT
  valdemult text,
  -- VAL.DEMULTP
  valdemultp text,
  -- VAL.DEMULFP
  valdemulfp text,
  -- DM.CONTR
  dmcontr text,
  -- DM.CONTP
  dmcontp text,
  -- DM.CONFP
  dmconfp text,
  -- NOTAFISCAL
  notafiscal text,
  -- COKWH
  cokwh text,
  -- COKW
  cokw text,
  -- COKVA
  cokva text,
  -- %PERD
  perd text,
  -- VAL.PIS
  valpis text,
  -- VLCOFINS
  vlcofins text,
  -- VLICMSUB
  vlicmsub text,
  -- VLACRBAN
  vlacrban text,
  -- LTANTKVA
  ltantkva text,
  -- LTATUKVA
  ltatukva text,
  -- DEM.HSVD
  demhsvd text,
  -- TS-N
  tsn1 text,
  -- TS-N
  tsn2 text,
  -- LIMI
  limi1 text,
  -- LIMI
  limi2 text,
  -- LIMS
  lims1 text,
  -- LIMS
  lims2 text,
  -- CODIGO DE BARRAS DA FATURA
  codigodebarras text,
  last_csv_column text default '', -- avoid out of bounds copy command (ceb csv file has an extra semicolon at the end of the line)
  -------------------------------------------------------------------
  energy_meter_id integer generated always as (cliente::integer) stored references energy_meters (energy_meter_id),
  year integer generated always as (substring(mesft from 1 for 4)::integer) stored,
  month integer check (month >= 1 and month <= 12) generated always as (substring(mesft from 5 for 2)::integer) stored,
  modalidade text not null generated always as (
    case
      when demamp::integer > 0 then 'a' -- azul
      else case
        when demanft::integer > 0 then 'v' -- verde
        else 'c' -- convencional
      end
    end
  ) stored,
  icms numeric generated always as (replace(valoricms,',','.')::numeric) stored,
  cip numeric generated always as (replace(valorcip,',','.')::numeric) stored,
  cofins numeric generated always as (replace(retcofins,',','.')::numeric) stored,
  irrf numeric generated always as (replace(retenirrf,',','.')::numeric) stored,
  csll numeric generated always as (replace(retencsll,',','.')::numeric) stored,
  pis numeric generated always as (replace(retenpis,',','.')::numeric) stored,
  juros numeric generated always as (replace(valacrmor,',','.')::numeric + replace(valdivacr,',','.')::numeric) stored,
  desconto numeric generated always as (replace(valdivdes,',','.')::numeric) stored,
  bc numeric generated always as (replace(valbasecal,',','.')::numeric) stored,
  vliq numeric generated always as (replace(valtotliq,',','.')::numeric) stored,
  vbru numeric generated always as (replace(valtotbru,',','.')::numeric) stored,
  -- convencional
  kwh_medido integer generated always as (consmed::integer) stored,
  kwh_faturado integer generated always as (consfat::integer) stored,
  -- verde: no suffix
  -- azul: _p and _f suffixes (ponta e fora de ponta)
  kwh integer generated always as (conftfp::integer) stored,
  kwh_p integer generated always as (conftp::integer) stored,
  kwh_f integer generated always as (conftfp::integer) stored,
  dm integer generated always as (demmfp::integer) stored,
  dm_p integer generated always as (demamp::integer) stored,
  dm_f integer generated always as (demmfp::integer) stored,
  df integer generated always as (demanft::integer) stored,
  df_p integer generated always as (demftp::integer) stored,
  df_f integer generated always as (deftfp::integer) stored,
  /* ? */ ufer integer generated always as (exrcp::integer + exrcfp::integer) stored,
  ufer_p integer generated always as (exrcp::integer) stored,
  ufer_f integer generated always as (exrcfp::integer) stored,
  /* ? */ verex numeric generated always as (
    (
      replace(valexconp,',','.')::numeric +
      replace(valexconfp,',','.')::numeric
    ) / (1 - (.01 * replace(aliquicms,',','.')::numeric))
  ) stored,
  verex_p numeric generated always as (replace(valexconp,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  verex_f numeric generated always as (replace(valexconfp,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  vdf numeric generated always as (replace(valdemfat,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  vdf_p numeric generated always as (replace(valdemftp,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  vdf_f numeric generated always as (replace(valdemftfp,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  vud numeric generated always as (replace(valdemult,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  vud_p numeric generated always as (replace(valdemultp,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  vud_f numeric generated always as (replace(valdemulfp,',','.')::numeric / (1 - (.01 * replace(aliquicms,',','.')::numeric))) stored,
  dc integer generated always as (dmcontr::integer) stored,
  dc_p integer generated always as (dmcontp::integer) stored,
  dc_f integer generated always as (dmconfp::integer) stored,
  note text,
  primary key (energy_meter_id, year, month)
);
