\set trigger_name validate_allocation

drop function if exists :trigger_name cascade;
create or replace function :trigger_name ()
  returns trigger
  language plpgsql
  as $$
    begin
      case when new.source_depot_id is not null
        then
          case when new.target_depot_id is not null
            then
              case when new.task_id is not null
                then perform raise_exception(501); -- invalid allocation (sd int, td int, t int)
                else return new; -- supply transferred between depots (sd int, td int, t null)
              end case;
            else
              case when new.task_id is not null
                then return new; -- supply used in a task (sd int, td null, t int)
                else return new; -- depot expired (sd int, td null, t null)
              end case;
          end case;
        else
          case when new.target_depot_id is not null
            then
              case when new.task_id is not null
                then perform raise_exception(501); -- invalid allocation (sd null, td int, td, int)
                else return new; -- supply initial quantities definition (sd null, td int, t null)
              end case;
            else
              case when new.task_id is not null
                then perform raise_exception(501); -- invalid allocation (sd null, td null, t int)
                else perform raise_exception(501); -- invalid allocation (sd null, td null, t null)
              end case;
          end case;
      end case;
    end;
  $$
;

create trigger :trigger_name
before insert or update on allocations
for each row execute function :trigger_name();
