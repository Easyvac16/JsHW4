function task1() {
    let number = parseInt(prompt("Write number"))
    let degree = parseInt(prompt("Write degrees"))
    function degrees(number, degree) {
        if (degree == 0) {
            return 1;
        }

        return number * degrees(number, degree - 1);
    }
    alert(`Number ${number} in degrees ${degree} = ${degrees(number, degree)}`)
}
function task2() {
    let number_frst = parseInt(prompt("Write first number"))
    let number_sec = parseInt(prompt("Write second number"))
    function divider(number_frst, number_sec) {
        if (number_sec == 0) {
            return number_frst
        }

        return divider(number_sec, number_frst % number_sec)
    }
    alert(`The greatest common denominator : ${divider(number_frst, number_sec)}`)
}
function task3()
{
    let number = parseInt(prompt("Write number"))

    function MaxDigit(number) {
        if (number < 10) {
            return number
        }
    
        let firstDigit = number % 10
        let maxInRest = MaxDigit(Math.floor(number / 10))
    
        return Math.max(firstDigit, maxInRest)
    }
    alert(`The maximum number:${MaxDigit(number)}`)
}
function task4()
{
    let number = parseInt(prompt("Write number"))
    function isPrime(number, divider = 2) {
        if (number < 2) {
            return false;
        }
    
        if (divider == number - 1) {
            return true;
        }
    
        if (number % divider == 0) {
            return false;
        }
    
        return isPrime(number, divider + 1);
    }
    isPrime(number) == true ? alert(`Number ${number} is prime`):alert(`Number ${number} is non-prime`)
}
function task5()
{
    let number = parseInt(prompt("Enter the number you want to divide into multiples"))
    function factorize(number, divisor = 2) {
        if (number <= 1) {
            return [];
        }
    
        if (number % divisor == 0) {
            return [divisor, ...factorize(number / divisor, divisor)];
        }
    
        return factorize(number, divisor + 1);
    }
    alert(`Multipliers of a number ${number} = ${factorize(number)}`)
}
function task6()
{
    let ser_numb = parseInt(prompt("Write finonacci serial number"))
    function fibonacciRecursive(number) {
        if (number <= 0) {
            return "Invalid serial number";
        } else if (number == 1 || number == 2) {
            return 1;
        } else {
            return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
        }
    }
    alert(`Fibonacci number under the number ${ser_numb} = ${fibonacciRecursive(ser_numb)}`)
}
