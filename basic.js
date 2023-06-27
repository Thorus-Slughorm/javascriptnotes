// console.log("hello world ! ");

// console.log("hello student ! ");

// let firstname = "hero hu me";
// let lastname = 'Achaaaa! ha ha ha !';

// // updation firstname = ' hero hihu bhai';
// let fullname = 'tanish dogra'

// console.log(fullname);

// console.log(firstname, lastname);

// let yourname;
// yourname = 'Tanish';
// console.log(yourname);

// console.log(fullname.toUpperCase());
// console.log(fullname.length);

// let message = "It\'s OK";
// console.log(message);


// ************operators**********


var num1 = 10;
var num2 = 5;

var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var rem = num1 % num2;


console.log("number 1 is : " + num1 + " and " + "number 2 is : " + num2);
console.log("sum of the numbers is : " + sum);
console.log("subtraction of the numbers is : " + sub);
console.log("multiplication of the numbers is : " + mul);
console.log("division of the numbers is : " + div);
console.log("reaminder  of the numbers is : " + rem);

//incrementing
var num0 = 100;
num0++;
console.log("after incrementing the num0 from 100 , it will become: " + num0);
//decrementing
var numx = 100;
numx--;
console.log("after decrementing the numx from 100 , it will become: " + numx);
//power 
var num3 = 3;
var ex = num3 ** 2;
console.log(" 3 is to power 2 is : " + ex);


//********* arrays : it means list of things ***************

let fruits = ['Apple', 'Mango', 'Banana', 'Grapes'];
let coding = ['html', 'css', 'python', 'php'];


console.log(fruits);
console.log(coding);

console.log(fruits[1]);
console.log(fruits[4]); //ther are 4 items but indexing start from 0 so 0 to 3
console.log(fruits[3]);
console.log(coding[0]);

//adding in arrays

fruits.push('Orange');
console.log(fruits);

fruits.unshift('Watermelon'); // to add in the starting of the array
console.log(fruits);

//deleting in Array
fruits.pop();
console.log(fruits);

fruits.shift(); //to delete from the starting of the array 
console.log(fruits);
//other way to mae array
var friends = new Array('Tanish', 'Aman');
console.log(friends);


//***********object literals****************
//it store in key value pairs

let persons = {
    firstname: 'Tanish',
    lastname: 'Dogra',
    hobbies: ['Chess', ' Coding'],
    address: { //using addres as key in object literals
        state: 'Bihar',
        country: 'India',
    },
};
console.log(persons);
console.log(persons.firstname, persons.lastname);
console.log(persons.hobbies);
console.log(persons.hobbies[1]);
persons.hobbies.push('cricket');
console.log(persons.hobbies);

//adding key value pair in array

persons.age = 19;
console.log(persons);


console.log(persons.address.state);
console.log(persons.address);
console.log(persons);


//**********array of object literals*************

let person = [{
        name: 'Tanish Dogra',
        age: 21,
        isCoder: true,
    },
    {
        name: 'Chauhan',
        age: 20,
        isCoder: true,
    },
    {
        name: 'Tanu Dogra',
        age: 21,
        isCoder: true,
    },
];
console.log(person);
console.log(person[1]);
console.log(person[0]);
console.log(person[0].name);
console.log(person[0].age);
console.log(person[1].name);
console.log(person[1].age);

//doing change in name 

console.log("after changing the name from the array : ")
person[0].name = 'Tanish';
person[1].name = 'Tanu';

console.log(person[0].name);
console.log(person[1].name);

//*******if else statements ::************
let age = 17;
if (age <= 18) {
    console.log("You cannot drive");
} else {
    console.log("you can drive");
}

//comparision operators : we compare two values 
// >,<,<=,>=,==,!=,===,!== .
// === : equal value to and equal type   " it compare value and datatype too.."
//!== : not equal value or not equal type 

//*********else if statement
let age1 = 77;
if (age1 === 18) {
    console.log("Age is 18");
} else if (age1 > 65) {
    console.log("Age is greater then 65 ");
} else if (age1 > 18) {
    console.log("Age is greater then 18");
} else {
    console.log("Age is less than 18");
}

//****** */ &&:AND ||:OR  *******
//logical AND and OR operators 

let age2 = 70;
if (age2 > 18 && age2 < 65) {
    console.log("You are safe to drive");
} else {
    console.log("You are not allowed to drive");
}

let age3 = 70;
if (age3 > 18 || age3 < 65) {
    console.log("You are safe to drive");
} else {
    console.log("You are not allowed to drive");
}

//*****switch statement******

let frt = 'Apple';

switch (frt) {
    case 'Apple':
        console.log("your fav fruit is Apple");
        break;

    case 'mango':
        console.log("your fav fruit is Mango");
        break;
    case 'banana':
        console.log("your fav fruit is Banana");
        break;

    default:
        console.log("Please enter a different fruit name");

}

//now switch on number 

let no = 1;
switch (no) {
    case 1:
        console.log('The number you selected is : One');
        break;
    case 2:
        console.log('The number you selected is : Two');
        break;
    case 3:
        console.log('The number you selected is : Three');
        break;
    default:
        console.log("Enter a diiferent number ");
}

//*****loops******
console.log(" ");
console.log("**For loop ::**");
console.log(" ");
for (let i = 0; i <= 5; i++) {
    console.log(i + " Hello World !");
}

console.log(" ");
console.log("**For loop ::**");
console.log(" ");
for (let i = 3; i > 0; i--) {
    console.log(i, 'Hello world !');
}

console.log(" ");
console.log("**For loop ::**");
console.log(" ");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//****while loop******
console.log(" ");
console.log("**While loop ::**");
console.log(" ");
let x = 0;
while (x < 3) {
    console.log('Hello World :', x);
    x++;
}


console.log(" ");
console.log("for of loop ");
console.log(" ");
let fruits = ['Apple', 'Mango', 'Banana', 'Watermelon'];
for (fruit of fruits) {
    console.log(fruit);
}

functions::a group / block of code that performs a prticular task.

function printDetails() {
    console.log("First name : Tanish");
    console.log("Last name : Dogra");
    console.log("Age : 21");
    console.log('Twitter handle : Tanish7Dogra');
    console.log('Insta handle : Tanish_xd_');

}

printDetails();
printDetails();

let fruits = ['Apple', 'Mango', 'Banana', 'Watermelon'];

function printElements() {
    for (fruit of fruits) {
        console.log(fruit);
    }
}
printElements();

let codinglanguages = ['js', 'php', 'html', 'python'];
//**function with parameter  */
function printEle(myArray) {
    for (i of myArray) {
        console.log(i);
    }
}
printEle(codinglanguages);
console.log(" ");
printEle(fruits);


return type functon:

    function sum(num1, num2) {
        const sum = num1 + num2;
        //console.log(sum);
        return sum; //iske bad jo bhi command likhoge it will not executed
        //so put return at the last 

    }
const mysum = sum(12, 14);
console.log(mysum);

const mysum2 = mysum + 4;
console.log(mysum2);


//Arrow functions::

const sum = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};

let mySum = sum(2, 3);
console.log(mySum);

const sayHello = (name) => {
    console.log('Hello', name);
};
sayHello("Tanish");

//we can make this arrow function more shorter like :
sayH = (name) => console.log('Hello', name);
sayH('Tanish Dogra');