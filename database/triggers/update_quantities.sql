\set trigger_name update_quantities

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    declare
      "boxId" integer;
      "specId" integer;
      "supplyId" integer;
    begin
      "boxId" = coalesce(new.internal_box_id,old.internal_box_id,new.external_box_id,old.external_box_id);
      "specId" = coalesce(new.spec_id,old.spec_id);
      select supply_id into "supplyId" from supplies where box_id = "boxId" and spec_id = "specId";
      update supplies set
        qty_proposed = qty_proposed - coalesce(old.qty_proposed,0) + coalesce(new.qty_proposed,0),
        qty_approved = qty_approved - coalesce(old.qty_approved,0) + coalesce(new.qty_approved,0),
        qty_consumed = qty_consumed - coalesce(old.qty_consumed,0) + coalesce(new.qty_consumed,0)
      where supply_id = "supplyId";
      return null;
    end;
  $$
;

create trigger :trigger_name
after insert or update or delete on allocations
for each row execute procedure :trigger_name();
