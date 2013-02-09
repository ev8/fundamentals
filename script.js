alert("hello,world");

//input
var name = prompt("what is your name?");
alert("hello, " + name);

// variables, weak typed 
var a;
a = 5;
a = 10000;
a = "five";
a = 123.4535;
a = -500;
alert(a);

// characters and strings
var phrase =" he said \"escape\" the quotes";
var phrase2 = "this is a siimple phrase.";
alert(phrase2.length);
//concat strings
alert(phrase+phrase2);
// operators
var a = 10;
var b = 7;
var result = a+b;
prompt(result);
result = (5+5)*10;
prompt(result);

result = result + 10;
result += 10;
result ++;

// properly using white space
//one statement one line

// conditionals

var a = 10;
var b  = prompt("enter value");
if(a<b){
alert("true");
}else{
alert("false");
}

//switches

var grade= prompt("enter grade");
 switch(grade){
 	case "A":
		alert("pass");
		break;
	case "B":
		alert("sort of pass");
		break;
	case "C":
 		alert("fail");
		break;
	default:
		alert("wrong");
 }

//breaking your code apart functions

function myFunction(){

	alert("this is a function");
}
myFunction();

// parameters and arguments

function addTwonumbers(a,b){
alert(a+b)
}
var x = prompt( "x=");
var y = prompt("y=");
}
addTwonumbers(x,y);
//variable function
 var x; global variable
