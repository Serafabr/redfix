\set function_name api.deactivate_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update depots set is_active = false where depot_id = "depotId";
      id = "depotId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `depotId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
