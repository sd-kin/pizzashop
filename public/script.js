function sayhello()
{
localStorage.setItem('bgcolor', 'red');
var x = localStorage.getItem('bgcolor');
alert (x);
}