function sayhello()
{
var x = window.localStorage.getItem('csa');

x=x*1+1;
window.localStorage.setItem('csa', x);
alert (x);
}