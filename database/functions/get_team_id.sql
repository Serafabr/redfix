\set function_name get_team_id

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
  out "teamId" integer
)
  language plpgsql
  strict
  as $$
    begin
      select team_id into "teamId" from persons where person_id = "personId";
      if ("teamId" is null)
        then perform raise_exception(602);
      end if;
    end;
  $$
;
