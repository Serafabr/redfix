\set function_name restart_sequences

drop function if exists :function_name;
create or replace function :function_name (
  in next_seq_value integer,
  out ts timestamptz
)
  language plpgsql
  strict
  as $$
    declare
      seqs record;
    begin
      for seqs in
        select sequencename as sn
          from pg_sequences
        where schemaname = 'public'
      loop
        execute format('alter sequence %I restart with %s', seqs.sn, next_seq_value);
      end loop;
      ts = now();
    end;
  $$
;

select :function_name(10001);
drop function if exists :function_name;
