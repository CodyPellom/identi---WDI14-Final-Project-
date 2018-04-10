class CreateTones < ActiveRecord::Migration[5.1]
  def change
    create_table :tones do |t|
      t.integer :score
      t.string :tone_name
      t.string :tone_id

      t.timestamps
    end
  end
end
