//js
//variable
//Example: 00 Merging Array
const football = ["BR", "ARG", "GER"];
const cricket = ["AUS", "WI", "IND"];
const topteams = football.concat(cricket);
function arraymerge(){
	document.getElementById('a.merge').innerHTML = "new array: " + topteams;
}
//Example: 00 Array push method
const xpush = ["rdp", "ylp", "blp"];
xpush.push("whp");
function arraypush(){
	document.getElementById('a.push').innerHTML = "new array: " + xpush;
}
//Example: 35 Array pop method
const xpop = ["rdd", "yll", "bll"];
xpop.pop();
function arraypop(){
	document.getElementById('a.pop').innerHTML = xpop;
}
//Example: 36 Changing Array elements
let xarray = ["rd", "yl", "bl"];
xarray[1] = "wh";
function changearray(){
	document.getElementById('a.change').innerHTML = xarray;
}
//Example: 37 Number Rounding
let xround = 4.5678;
function numround(){
	document.getElementById('s.numround').innerHTML = xround.toFixed(2);
}
//Example: 38 Decimal to Binary convert
let xnum = 8;
function numchange(){
	document.getElementById('s.numchange').innerHTML = xnum.toString(2);
}
//adding strings
let xsa = "20";
let ysa = "24";
let zsa = xsa + ysa;
function addstrings(){
	document.getElementById('s.add').innerHTML = zsa;
}
//Example: 40 String position search()
let stringsearchtext = "Full stack web development course";
function stringsearch(){
	document.getElementById('s.search').innerHTML = stringsearchtext.search('course');
}
//Example: 41 string length
let stringtext = "ASSSDFGHJKL";
function stringlength(){
	document.getElementById('s.length').innerHTML = stringtext.length;
}
//Example: 42 character at a specified index (position)
let stringp = "ASSSD FGHJKL";
function stringposition(){
	document.getElementById('s.position').innerHTML = stringp.charAt(3);
}
//Example: 43 Event: Show Time 
function dateandtime(){
	document.getElementById('datentime').innerHTML = Date();
}
//Example: 44 Booleans Operators
var xb = 5;
var yb = 7
var zb = xb < yb;
function booleano(){
	document.getElementById('boolean').innerHTML = zb;
}
//Example: 45 exponentiation operator
var x1=6;
var expv = x1 ** 3;
function exponential(){
	document.getElementById('exp_value').innerHTML = expv;
}

//Example: 46 String Comparison
let text1 = "4";
let text2 = "5";
let stringresult = text1 > text2;
function stringcomp(){
	document.getElementById('stringcomparison').innerHTML= stringresult;
}
// Example: 47 Operator Modulus (Division Remainder)
let x = 12;
let y = 5;
let z = x % y;
function modulus(){
	document.getElementById('reminder').innerHTML = z;
}
//Example: 48 Operators 
let number1=5;
let number2=2;
let result = number2 + number1;
function calculation(){
	document.getElementById('value').innerHTML = result;
}
//bulb on/off
function bulbOn(){
	document.getElementById('bulb').src = 'images/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'images/off.gif';
}
//text change
//keyword function
function textChange(){
	document.getElementById('t_c').innerHTML = "It's finally 2024"
}

//onchange	An HTML element has been changed
//onclick	The user clicks an HTML element
//onmouseover	The user moves the mouse over an HTML element
//onmouseout	The user moves the mouse away from an HTML element
//onkeydown	The user pushes a keyboard key
//onload	The browser has finished loading the page//