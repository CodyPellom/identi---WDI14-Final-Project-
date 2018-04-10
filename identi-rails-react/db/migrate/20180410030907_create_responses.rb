class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.string :personality
      t.string :tone
      t.string :language

      t.timestamps
    end
  end
end
