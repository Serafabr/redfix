drop type if exists alloc_type cascade;
create type alloc_type as (
  alloc_id integer,
  qty numeric
);

drop type if exists invoice_type cascade;
create type invoice_type as (
  chave text,
  numero text,
  datahoraemissao text,
  emitcnpj text,
  emitnome text,
  destcnpj text,
  destnome text,
  vbc text,
  vicms text,
  vicmsdeson text,
  vbcst text,
  vst text,
  vprod text,
  vfrete text,
  vseg text,
  vdesc text,
  vii text,
  vipi text,
  vpis text,
  vcofins text,
  voutro text,
  vnf text
);

drop type if exists invoice_item_type cascade;
create type invoice_item_type as (
  codigoprod text,
  descprod text,
  ncm integer,
  ean integer,
  unidade text,
  quantidade text,
  valorunit text,
  valoritem text,
  valorbcicms text
);
