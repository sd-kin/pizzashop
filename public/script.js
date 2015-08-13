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