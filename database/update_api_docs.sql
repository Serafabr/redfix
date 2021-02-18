with list_of_operations as (
  select * from api_privileges
)
select generate_api_documentation(
  l.operation,
  l.description
) from list_of_operations as l
;
