class CreatePersonalities < ActiveRecord::Migration[5.1]
  def change
    create_table :personalities do |t|
      t.string :trait_id
      t.string :name
      t.string :category
      t.integer :percentile

      t.timestamps
    end
  end
end
