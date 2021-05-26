\set function_name get_team_id

drop function if exists :function_name;
create or replace function :function_name (
  out "teamId" integer
)
  language plpgsql
  strict
  as $$
    begin
      select team_id into "teamId" from persons where person_id = get_person_id();
      if ("teamId" is null)
        then perform raise_exception(602);
      end if;
    end;
  $$
;
