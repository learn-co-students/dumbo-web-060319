class AddPriceToBreads < ActiveRecord::Migration[5.2]
  def change
    add_column :breads, :price, :integer
  end
end
