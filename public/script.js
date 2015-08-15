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

function showCa  rt() {
var items = []
for (var i = 0; i < localStorage.length; i++){
items.push(localStorage.getItem(localStorage.key(i))+" items", " of id #"+localStorage.key(i));
}
alert(items);	
}

function clearCart() {
	
	localStorage.clear();
}