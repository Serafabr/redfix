\set function_name api.modify_monitor

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  in name text,
  in description text,
  in unit text,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update monitors set (
        updated_at,
        updated_by,
        name,
        description,
        unit,
        asset_id
      ) = (
        default,
        default,
        name,
        description,
        unit,
        "assetId"
      ) where monitor_id = "monitorId";
      id = "monitorId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `monitorId`\n
* `name`\n
* `description`\n
* `unit`\n
* `assetId`\n
\n
Output `id`: `monitorId` of the modified monitor
';

grant execute on function :function_name to coordinator, supervisor;
