\set function_name api.modify_task

drop function if exists :function_name;
create or replace function :function_name (
  in attributes tasks,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update tasks as t
        set (
          updated_at,
          updated_by,
          task_priority_id,
          task_category_id,
          project_id,
          title,
          description,
          place,
          progress,
          date_limit,
          date_start,
          date_end,
          request_id
        ) = (
          now(),
          get_person_id(),
          attributes.task_priority_id,
          attributes.task_category_id,
          attributes.project_id,
          attributes.title,
          attributes.description,
          attributes.place,
          attributes.progress,
          attributes.date_limit,
          attributes.date_start,
          attributes.date_end,
          attributes.request_id
        ) where t.task_id = attributes.task_id
        returning t.task_id into id;

        insert into task_events values (
          default,
          id,
          'modify',
          now(),
          get_person_id(),
          attributes.team_id,
          null,
          null,
          'Alteração da tarefa.',
          null,
          null,
          true
        );

    end;
  $$
;


comment on function :function_name is E'
Mandatory inputs(s):\n
* `attributes.title`\n
* `attributes.taskPriorityId`\n
* `attributes.taskCategoryId`\n
* `attributes.teamId`\n
\n
Output `id`: `taskId` of the modified task
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
