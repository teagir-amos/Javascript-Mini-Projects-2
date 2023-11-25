//Question 1 - SUM OF NUMBERS.
function Sum(a, b) {
    let result = parseFloat(`${a}` + `${b}`);
    for (let n = 1; n < 100; n++) {
        console.log(result);
    }
}
Sum(80, 6);

//Question 2 - FACTORIAL CALCULATION.
let n = parseInt(prompt("Enter a positive integer"));
function Factorial(n) {
    let ans = 1;
    if (n < 0) {
        console.log("Error, Enter a positive integer")
    } else if (n === 0) {
        console.log(`1`)
    } else {
        for (let i = 2; i <= n; i++) {
            ans = ans *= i
        }
        console.log(ans)
    }
}
Factorial(n);

//Question 3(a) - PRINT EVEN NUMBERS
function EvenNum(i) {
    for (let i = 0; i < 50; i++) {
        if (i % 2 == 0) {
            console.log(i)
        } else {
            console.log("not an even number")
        }
    }
}
EvenNum();

//Question 3(b) - sum of even numbers from 1-50
function EvenSum() {
    for (let i = 0; i < 50; i++) {
        if (i % 2 == 0) {
            console.log((i) + (i))
        } else {
            console.log("not an even number")
        }
    }
}
EvenSum();

//Question 4 - Reverse string Using Character array
let stringinput = prompt("Enter any word");
let charArray = stringinput.toCharArray();
let len = stringinput.length
function Reverse(stringinput) {
    for (let i = len - 1; i >= 0; i--) {
        console.log(charArray[i])

    }
}
Reverse();

//question 6 - Greatest Common divisor.
function GCD(a, b) {
    while (a && b) {
        let value1 = a;
        let value2 = b;
        a = value1;
        b = value1 % value2;
    }
    if (!a) {
        return b
    }
    if (!b) {
        return a
    }

}
console.log(GCD(6, 12));

//QUESTION 7 - FIBONACCI SEQUENCE.

function fib(params) {
    const number = [0, 1];
    for (let i = 2; i < 50; i++) {
        number[i] = number[i - 1] + number[i - 2];
    }
    console.log(number)

}
fib();

//QUESTION 8 - PALINDROME CHECKER.
function Palindrome(string) {
    var stringlength = string.length
    for (let index = 0; index < string / 2; index++) {
        if (string[index] !== string[string - 1 - index]) {
            return false;
        }
    }
    return true;
}
Palindrome();

//QUESTION 9 - PRIME NUMBERS.
let a = 100;
for (let i = 1; i <= a; i++) {

    for (let factor = 1; factor < i; factor++) {
        if (i % factor == 0) {
            console.log("not a prime")
        }
    }
    console.log(i)
}



//QUESTION 10 - MULTIPLICATION TABLE.
for (let i = 1; i <= 12; i++) {
    let value = 12;
    console.log(`${i} * ${value}) = ${i * value}`)

}



















