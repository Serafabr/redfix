\set function_name get_team_id

drop function if exists :function_name;
create or replace function :function_name (
  out teamid integer
)
  language plpgsql
  as $$
    begin
      select team_id into teamid from persons where person_id = get_person_id();
      if (teamid is null)
        then perform raise_exception(602);
      end if;
    end;
  $$
;
