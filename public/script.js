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
}

function showCart() {
var items = []
for (var i = 0; i < localStorage.length; i++){
items.push(localStorage.getItem(localStorage.key(i))+" items", " of id #"+localStorage.key(i));
}
alert(items);	
}

function clearCart() {
	
	localStorage.clear();
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
		cnat = cnt + value*1;
		}
	}
}