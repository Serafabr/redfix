drop view if exists api.tags;
create or replace view api.tags as
  select  t.tag_id,
          t.tag_text
  from tags as t
;
