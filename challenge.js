//section 7 coding challenges :
//find simple interest :
//challenge 1::
console.log("Coding challenge : ");

//hint: (principal * rate of interest * time)/100

function si(pr, roi, t) {
    const si = (pr * roi * t) / 100;
    return si;
}
const simp = si(100, 10, 2);
console.log(simp);

//challenge 2::
//sum of list numbers :
//using spread operator

function sum(...numbers) { //spread operator is used 
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        //total = total + numbers[i];
        total += numbers[i];
    }
    return total;


}
console.log(sum(1, 2, 3, 4, 5));

//challenge 3::
//print-table
//write a function which takes a number and print the table 

function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i }`);


    }
}

table(5);

//challenge 4 :: 
//average of array
//write a function which takes a array of number , calculates the average of numbers
//and returns it

// [1,2,3,4] = 10/4

function avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    // const avg = sum / numbers.length;
    // return avg;

    return sum / numbers.length;

}

console.log(avg([1, 2, 3, 4]));


//challenge number 5:
//find a number in array ::
//write a function which finds a number in an array of numbers 
//return true if the number is in the array otherwise return false :

function findNumInArray(num, numbers) {
    for (let i = 0; i < numbers.length; i++) {

        if (num === numbers[i]) {
            return true;
        }
    }
    return false;
}

console.log(findNumInArray(3, [5, 4, 6, 2]));

//challenge 6 ::
//write a function which takes an array of numbers and 
// returns all positive number in an array

function positiveArray(arr1) {
    let posi = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            posi.push(arr1[i]);
        }
    }
    return posi;

}

console.log(positiveArray([5, 6, 7, -2, -4]));


//test 

function positivenumbers(numbers) {
    let posi = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            posi.push(numbers[i]);
        }
    }
    return posi;
}

console.log(positivenumbers([-2, -4, 4, -6, 8, 11, -2, 111]));

//-ve ke liye 


function negativenumbers(numbers) {
    let negi = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negi.push(numbers[i]);
        }
    }
    return negi;
}

console.log(negativenumbers([-2, -4, 4, -6, 8, 11, -21, 111]));



//challenge 7 ::
//write a function which takes an array of numbers 
//and returns the largest numbers 
function largest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (largest < numbers[i]) {
            largest = numbers[i];
        }
    }
    return largest;
}
console.log(largest([1, 2, 3, 4, 5, 6]));


//challenge 8::
//fizzBuzz
//write a function which takes a number and 
//prints FizzBuzz if the number is divisible by both 3 and 5
//and if no. is div by 3 only then print Fizz and if by 5 then Buzz
//if the no. is not div by any ofthem print the number

function FizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

console.log(FizzBuzz(15));
console.log(FizzBuzz(5));
console.log(FizzBuzz(20));
console.log(FizzBuzz(8));

//challenge 9 ::
//write a function which take an arraay as argument and
//returns the reversed array 

function revarray(array) {
    let rev = [];

    for (let i = array.length - 1; i >= 0; i--) {
        rev.push(array[i]);
    }

    return rev;
}
let array1 = [1, 2, 3, 4, 5];
console.log(revarray(array1));
//bonus try from youself 
// try to reverse a string 

// challenge 10 
//write a function which takes two array as input 
//and returns the mergedarray of the 2 array 

function mergedArray(firstArray, secondArray) {
    let mergedArray = [];
    for (element of firstArray) {
        mergedArray.push(element);
    }
    for (element of secondArray) {
        mergedArray.push(element);
    }
    return mergedArray;
}

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
console.log(mergedArray(firstArray, secondArray));