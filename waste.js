const { log } = require("console");

const findFact = (num) => {
    let value = 1
    for (let i = num; i >= 1; i--) {
        value *= i
    }
    return value
}
// console.log(findFact(3));


function fibonacci(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(5));

function countVowel(n) {
    let count = 0
    let vowel = 'aeiouAEIOU'
    for (let i = 0; i < n.length; i++) {
        if (vowel.includes(n[i])) {
            count++
        }

    }
    return count
}

function ArrayMaxNum(n) {
    let max = 0;
    let secondMax = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] > max) {
            secondMax = max;
            max = n[i];
        } else if (n[i] > secondMax && n[i] < max) {
            secondMax = n[i];
        }
    }

    console.log("Second Max:", secondMax);
    console.log("Max:", max);
}

// ArrayMaxNum([0, 3, 99.99, 999, 4, 88, 99.999]);


function ArrayMinNum(n) {
    let Min = n[0];
    let secondMin = Infinity;

    for (let i = 0; i < n.length; i++) {
        if (n[i] < Min) {
            secondMin = Min;
            Min = n[i];
        } else if (n[i] < secondMin && n[i] > Min) {
            secondMin = n[i];
        }
    }

    console.log("Second Min:", secondMin);
    console.log("Min:", Min);
}

// ArrayMinNum([0.5, 0.6, 99.99, 999, 4, 88, 0.6]);


// bubble sort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sort:", arr);
}

// bubbleSort([5, 3, 8, 4, 2]);

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap smallest with arr[i]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log("Selection Sort:", arr);
}

// selectionSort([5, 3, 8, 4, 2]);


const removeDuplicate = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        console.log(!result.includes([arr[i]]));

        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    console.log(result);
}

// removeDuplicate([5, 5, 86, 6, 1, 9, 6, 3, 4])


function findMissingNumber(arr) {
    let n = arr.length + 1;
    console.log(n);

    let totalSum = (n * (n + 1)) / 2;
    let arrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }

    let missingNum = totalSum - arrSum;
    console.log("Missing Number:", missingNum);
}

// findMissingNumber([1, 2, 4, 5]);

function reverseNumberAlt(num) {
    let reversed = 0;

    while (num !== 0) {
        let digit = num % 10;
        console.log(digit, 'kk');
        reversed = reversed * 10 + digit; // append it to reversed
        num = Math.floor(num / 10);

    }

    return reversed;
}

// Test
// console.log(reverseNumberAlt(12345)); // 54321


function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    console.log(Math.sqrt(num));

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // divisible by i → not prime
        }
    }

    return true; // no divisors found → prime
}

// Test
// console.log(isPrime(5));  // true


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b; // remainder
        a = temp;
    }
    return a;
}

// Test
console.log(gcd(12, 18)); // 6


const longestWord = (val) => {
    let resul = val.split(' ')
    let temp = ''
    for (let i = 0; i < resul.length; i++) {
        if (resul[i].length > temp.length) {
            temp = resul[i]
        }
    }
    console.log(temp)
}
longestWord("hello ram site ramayan")