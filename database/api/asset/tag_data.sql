drop view if exists api.tag_data;
create or replace view api.tag_data as
  select  t.tag_id,
          t.tag_text
  from tags as t
;
