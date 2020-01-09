class CreateContents < ActiveRecord::Migration[5.2]
  def change
    create_table :contents do |t|
      t.string :title,         null: false
      t.string :text,          null: false
      t.string :image,         null: false
      t.string :prefectues,    null: false  
      t.references :user,     foreign_key: true
      t.timestamps
    end
  end
end