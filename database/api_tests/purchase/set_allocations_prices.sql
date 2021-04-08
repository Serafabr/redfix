\set tested_mutation api.set_allocations_prices

select api.set_allocations_prices(
  array[
    (
      :new_alloc_id,
      'box',
      (
        select s.price
        from allocations as a
        inner join supplies as s on (
          a.box_id = s.box_id and
          a.spec_id = s.spec_id
        ) where a.alloc_id = :new_alloc_id
      )
    )
  ]::alloc_price[]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
