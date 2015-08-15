require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'


set :database, "sqlite3:pizzashop.db"

class Product<ActiveRecord::Base

end

get '/' do
@products=Product.all
	erb :index		
end

get '/cart' do
@items = params['cart']
@total=[]
@items=@items.gsub('product_',"0").split(',')
@items.each do |x|
@total<<x.split("=")
end
@total.map!{|x| x.map!{|y| y.to_i}}
products=Product.all
@total.each do |x|
x[0]=products.find(x[0])
end
cnt=0
@tprice=0
@result=[]
@total.each do |x|
cnt+=1
@tprice+=x[0].price*x[1]
@result<<{count: cnt, name: x[0].title, number: x[1], price: x[0].price*x[1]}
end


erb :cart
end

