function demo1(){
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
}
//breaking your code apart functions
function myFunction(){

	alert("this is a function");
}
function addTwonumbers(a,b){
alert(a+b);
}

function demo2(){
myFunction();

// parameters and arguments


var x = prompt( "x=");
var y = prompt("y=");

addTwonumbers(x,y);
//variable function
//var G; global variable

// iteration and loops
var a =0;
while(a<10){
alert(a);
a++;
}

for ( var i=0; i<10;i++){
alert(i);
}
a=0;
do{
alert(a);
a++;
}while(a<10);

// strings and cancatinations
var a = "help";
var b = " me";
var foo = "20";
alert(a+b);

var mynum= Number(foo);
if(!isNaN(mynum)){
 alert("it's a number");
}
}
// patterns in strings
function demo3(){
var phrase =" this is a phrase";
alert(phrase.toUpperCase());
var str1 = "hello";
var str2 = "HELLO";
if(str1.toLowerCase() == str2.toLowerCase()){
alert(" they're equal");
}

var position = phrase.indexOf("is");
alert(position);
var len = phrase.length;
alert(len);
var segment = phrase.slice(2,5);
alert(segment);

// regular expressions
var myRE = /hello/;
myRE = new RegExp("hello");
var mystring ="does this contain hello";
if(myRE.test(mystring)){
alert("true");
}

//collections arrays

var myarray=[1,2,3,4,"hello",6,7,8];
alert(myarray[4]);

//array behavior

alert( myarray.length);

//array methods
myarray.reverse();
alert(myarray[1]);
myarray.sort();
alert(myarray.join());
myarray.push("pushed");
alert(myarray.pop());

//iterating through collections
var myArray = [500,500,500,500,500];
var total = 0;
for ( var i = 0 ; i < myArray.length ; i++ ) {	
         total = total + myArray[i];
	 }
alert("The total is: " + total);
}
// playing with the dom/ event driven programing

var headline = document.getElementById("mainheading");
headline.onclick=function(){

headline.innerHTML ="wow a new headline";
};
var headline1 = document.getElementById("heading1");
headline1.onclick=function(){
demo1();

};
var headline2 = document.getElementById("heading2");
headline2.onclick=function(){
demo2();

};
var headline3 = document.getElementById("heading3");
headline3.onclick=function(){

demo3();
};

