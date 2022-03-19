//Dom manipulation
// we have run in console output
// firstcontainer.innerHTML="<h1>Hello World</h1>"

// Changing the style without css
// document.getElementsByTagName("p")[0].style.fontStyle="italic"


//way to print in document.write

/* document.write("this is document.write")

//Ways to print in console


 console.warn("This is warning")// Used for the warning
console.error("This is an error")//This displays the error
console.clear()// Console will be cleared

 */

/* // Variables in javascript
//var,const,let
var num=10;
var num1=12;
console.log(num1+num)
console.log(`${num1+num}`)


//Data types in javascript
//Strings in javascript
var string="This"
var string1="is"
var string2="String concat"
console.log(`${string} ${string1} ${string2}`)

//Objects in javascript
var marks={
    sandeep:25,
    rahul:34,
    rohit:22
}
console.log(marks);

//Boolean in javascripts
var a=true;
var b=false;
console.log(a+b,a,b)

// Undefined in javascript
var s=undefined;
var f;
console.log(s)
console.log(f)


//Null in javascript
var g=null;// There is no value inside
console.log(g)

//arrays in javascript
 var k=["one",1,2,3,null,undefined,true,false]
 console.log(k)
 console.log(k[0])
 console.log(k[3])
 console.log(k[10])
 */


 //Operators in javascript

// Arithmetic Opearators
/* var a=20;
var b=22;
console.log(`addition of a and b is ${a+b}`)
console.log(`Subtraction of a and b is ${a-b}`)
console.log(`Multipliction of a and b is ${a*b}`)
console.log(`Division of a and b is ${a/b}`)


//Assignment Opearators
var s=23;
var k=11;
s+=20//s=s+20
// s-=20//s=s-20
// s*=20//s=s*20
// s/=20//s=s/20
console.log(s)
 */
//Comparision Opeartors in Javascript
/* var d=12;
var p=08;
console.log(p==d)
console.log(p<d)
console.log(p<=d)
console.log(p>d)
console.log(p>=d)
console.log(p!=d) */

//Logical Opearators

/* //Logical and
console.log(true && true)//true
console.log(true && false)//false
console.log(false && true)//false
console.log(false && false)//false

//Logial or
console.log(true || true)//true
console.log(true || false)//true
console.log(false || true)//true
console.log(false || false)//false

//logical not
console.log(!false)// true
console.log(!true)//false
 */



//Functions in javascript
/* function avg(a,b){
    z=(a+b)/2
    // return (a+b)/2;
    return z;

}
s=avg(3,4);
h=avg(88,77)
console.log(s,h,z) */


//Conditionals in javascript
//else if statements in the javscript
//alternative is switch case statements

// var age=Number(prompt("enter the age below"));
/* var age=20;
if(age<18){
    console.log("Youe are not eligible for driving")

}
else if(age>=18){
    console.log("You are eligible for driving")
}

else{
    console.log("start practising the driving skills")
} */

/* var birthyear=Number(prompt("Enter the birth year"));
if(birthyear<=2020){
    birthyear+=2020;
    console.log(birthyear)
}
else {
    birthyear-=1990;
   console.log(birthyear)
} */

/* var age=Number(prompt("Enter your age"))
if(age>2 && age<=5 ){
    console.log("He is a kid")
}
else if (age >5 && age<10){
    console.log("He is a boy")
}
else if( age>=10 && age<20){
    console.log("He is in teenage")
}
else{
    console.log("He is in middle age ")
} */


//arrays in javascript

/* var arr=[1,2,3,4]
//iterate an array
for (var i=0;i<arr.length;i++){
    console.log(arr[i])
}


// for-each
arr.forEach(function(e){
    console.log(e)
})

var array=[1,true,false,undefined,null,"Hello","Fun"]
array.forEach(
function (element){
    console.log(element)

})

var fun=[3,5,'t',Boolean,'this','hi']
fun.forEach(function(i){
console.log(i)
})

var ak=["Hello","funny","map",1,2,3,4]
ak.forEach(function(k){
    console.log(k)
}) */



/* //let var and const
let f=0;//this is for block scope
//if we use outside the fuction then it shows error

// let a="fun";
// var b=20;
function fun(){
    let a="string";
    var b="funny";
} 
console.log(b)
console.log(a)*/

/* const z=0;// we cannot reassing the variable bcz it is constant
z+=1;
console.log(z) */


//array methods in javascript
/* 
var arr=[1,2,3,4,5,"Hello"]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
arr.pop();
console.log(arr)// return full array
k=arr.push("fun")
console.log(k)// return length
console.log(arr)// return full array
arr.shift()
console.log(arr)// return full array
arr.unshift("string")
console.log(arr)// return full array

z=[4,6,3,7,222,88,55,121,8989]
z.sort()
console.log(z)// It sorts in alphabital order */

//String methods in javascript

let str="Hello world!,you are beautiful,aren't you";
console.log(str.length)
console.log(str.indexOf("you"))// Even space and special charcters will be considered
// returns the 1st index only when there is multiple values
console.log(str.lastIndexOf("are"))//Last index which is repeating

console.log(str.slice(1,3))// slice the string starts with index 1



//replacing the string with the new word using the replace
s=str.replace("beautiful","amazing")
console.log(s)
console.log(str.replace("Hello world","vijay"))



























