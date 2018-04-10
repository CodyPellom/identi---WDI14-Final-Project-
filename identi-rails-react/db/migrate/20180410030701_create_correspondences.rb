caclass CreateCorrespondences < ActiveRecord::Migration[5.1]
  def change
    create_table :correspondences do |t|
      t.string :title
      t.string :input
      t.string :resultvf23
      t.timestamps
    end
  end
end
