class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :content
      t.belongs_to :bakery, foreign_key: true
      t.references :bread, foreign_key: true

      t.timestamps
    end
  end
end
