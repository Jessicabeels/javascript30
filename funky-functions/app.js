//Write a function that accepts two numbers as parameters, and returns the sum.

const numSum = (num1, num2) => {
    return num1 + num2
}


console.log(numSum(2,2))

//Write a function that accepts three numbers as parameters,
// and returns the largest of those numbers.

const largeNum = (num1, num2, num3) => {
    let bigNum = Math.max(num1, num2, num3)
    return bigNum
}

console.log(largeNum(1,8,3))

//Write a function that accepts one number as a parameter, 
//and returns whether that number is even or odd. (Return the string "even" or "odd");

const evenOdd = (num) => {
    if (num % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(evenOdd(8))

//Write a function that accepts a string as a parameter. 
//If the length of the string is less than or equal to twenty characters long, 
//return the string concatenated with itself (string + string). 
//If the string is more than twenty characters long, 
//return the first half of the string.

const strlngth = (str) => {
    if (str.length <= 20){
        return str + str
    } else if (str.length > 20){
        return str.slice(0,str.length/2) + str.length + 'is the length of the string'
    }
}

console.log(strlngth("Dino suit man from sketchyyy"))

//Write a function that accepts a number ‘n’ as a parameter. 
//Then print the first ‘n’ Fibonacci numbers and return their sum.

const fibNums = (n) => {
    return sum * n
}