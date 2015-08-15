class Orders < ActiveRecord::Migration
  def change
   create_table :orders do |p|
  p.string :name
  p.string :phone
  p.text :order_body
  p.text :address
  
  p.timestamps
  end
end
end