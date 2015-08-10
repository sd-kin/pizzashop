class AddProductsToDb < ActiveRecord::Migration
  def change
  Product.create title: 'first', description: 'first pizza', price: 350,  size: 30, is_spicy: false, is_veg: false, is_best_offer: false, path_to_image: '/images/first.jpg'
  
  Product.create title: 'second', description: 'second pizza', price: 400, size: 30, is_spicy: false, is_veg: false, is_best_offer: false, path_to_image: '/images/second.jpg'
  
  Product.create title: 'third', description: 'third pizza', price: 1000, size: 10, is_spicy: false, is_veg: false, is_best_offer: false, path_to_image: '/images/third.jpg'
  end
end
