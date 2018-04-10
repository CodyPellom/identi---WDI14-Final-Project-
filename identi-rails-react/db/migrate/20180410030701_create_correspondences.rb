caclass CreateCorrespondences < ActiveRecord::Migration[5.1]

def change
  create_table :correspondences do |t|
    t.string :title
    t.string :input
    t.string :result

    t.timestamps
  end
end
