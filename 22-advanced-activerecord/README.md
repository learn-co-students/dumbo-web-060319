# "Advanced" ActiveRecord

## Relationship Macros

  - `has_one` (User - Social Security Card)
  - `has_and_belongs_to_many`

  - `foreign_key`(Has_Many/Belongs_to)
  - `class_name` (Has_Many/Belongs_to)
  - `inverse_of` (Has_Many/Belongs_to)
  - `dependent` (Has_Many/Belongs_to)
  - `touch` (Belongs_to)

  - Scope blocks in Has_Many

Documentation: https://guides.rubyonrails.org/association_basics.html

## Self-Referential

*  What is a self-referential relationship? When would you want to use one?
  - Single Table Inheritance
  - Polymorphic

Shameless Plug: https://medium.com/@TheDickWard/self-referential-relationships-aka-self-joins-in-rails-64f8f36ac311

## ActiveRecord Querying

  - `where`
  - `distinct`
  - `pluck`
  - `select`
  - `limit`
  - `exists?`

  Documentation: https://guides.rubyonrails.org/active_record_querying.html
