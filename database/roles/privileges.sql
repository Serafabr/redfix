grant usage on schema public to public;
alter default privileges in schema public grant all on tables to public;
alter default privileges in schema public grant usage on sequences to public;
alter default privileges in schema public grant execute on functions to public;

grant usage on schema api to public;
alter default privileges in schema api grant all on tables to public;
alter default privileges in schema api grant usage on sequences to public;
alter default privileges in schema api grant execute on functions to public;

grant usage on schema web to public;
alter default privileges in schema web grant all on tables to public;
alter default privileges in schema web grant usage on sequences to public;
alter default privileges in schema web grant execute on functions to public;
