\set trigger_name update_quantities

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    declare
      "boxSupplyId" integer;
      "invoiceSupplyId" integer;
    begin
      "boxSupplyId" = coalesce(new.box_supply_id, old.box_supply_id);
      "invoiceSupplyId" = coalesce(new.invoice_supply_id, old.invoice_supply_id);
      update supplies set
        qty_proposed = qty_proposed - coalesce(old.qty_proposed,0) + coalesce(new.qty_proposed,0),
        qty_approved = qty_approved - coalesce(old.qty_approved,0) + coalesce(new.qty_approved,0),
        qty_consumed = qty_consumed - coalesce(old.qty_consumed,0) + coalesce(new.qty_consumed,0)
      where supply_id in ("boxSupplyId", "invoiceSupplyId");
      return null;
    end;
  $$
;

create trigger :trigger_name
after insert or update or delete on allocations
for each row execute procedure :trigger_name();
