function sayhello()
{
var x = window.localStorage.getItem('csa');

x=x*1+1;
window.localStorage.setItem('csa', x);
alert (x);
}

function addToCart(id) {
	var x = window.localStorage.getItem('product_'+id);
	x=x*1+1;
	window.localStorage.setItem('product_'+id, x);
	alert('you add '+x+' items of '+ id);
	update();
	button_text();
}

function showCart() {
var items = []
for (var i = 0; i < localStorage.length; i++){
items.push(localStorage.getItem(localStorage.key(i))+" items", " of id #"+localStorage.key(i));
}
update();
alert(items);
button_text()	
}

function clearCart() {
	
	localStorage.clear();
	update();
	button_text()
}


function cart_get_number_of_items()
{
var cnt=0;
for (var i = 0; i < localStorage.length; i++) 
	{
	var key = window.localStorage.key(i);
	var value = window.localStorage.getItem(key);
	if(key.indexOf('product_') == 0)
		{
		cnt = cnt + value*1;
		}
	}
return cnt;
}

function cart_get_orders()
{
var orders='';
for (var i = 0; i < localStorage.length; i++) 
	{
	var key = window.localStorage.key(i);
	var value = window.localStorage.getItem(key);
	if(key.indexOf('product_') == 0)
		{
		orders = orders + key+'='+value+',';
		}
	}
return orders;
}

function update()
{
var orders = cart_get_orders()
$('#orders_input').val(orders);
}

function button_text()
{
text = "Cart ("+cart_get_number_of_items()+")"
$('#cart_button').val(text);
}