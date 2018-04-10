class CreateLanguages < ActiveRecord::Migration[5.1]
  def change
    create_table :languages do |t|
      t.string :text
      t.integer :relevance

      t.timestamps
    end
  end
end
