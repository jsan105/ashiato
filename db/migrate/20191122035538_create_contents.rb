class CreateContents < ActiveRecord::Migration[5.2]
  def change
    create_table :contents do |t|
      t.string :text,         null: false
      t.string :image,        null: false
      t.references :visited,  null: false
      t.references :user,     foreign_key: true
      t.timestamps
    end
  end
end
