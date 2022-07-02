window.onload = () => {
    console.log("Ready to roll!");
    document.getElementById("q1").addEventListener("click", countOdds);
}
/** Count Odd Numbers Between
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    // Find the number of odd numbers between low and high by subtracting high from low to get the total numbers between,
    // subtracting one to account for one of the numbers, and dividing by two to split odds and evens.
    const oddNumbersBetween = (((high - low) -1)/2);
    // Round oddNumbersBetween up to nearest whole number
    const roundedOddNumbersBetween = Math.ceil(oddNumbersBetween);
    //Return roundedOddNumbersBetween if both high and low are even (determined using modulus operator)
    if (low % 2 === 0 && high % 2 === 0) {
        return roundedOddNumbersBetween;
    // Return roundedOddNumbersBetween plus one if one of the numbers is even and the other is odd (determined using modulus operator)
    } else if (low % 2 === 1 || high % 2 === 1) {
        return (roundedOddNumbersBetween + 1);
    }
    // Return roundedOddNumbersBetween plus two if both numbers are odd (determined using modulus operator)
    else return (roundedOddNumbersBetween + 2);
};

const displayResult = (result) => {
    document.getElementById("output").innerHTML = result;
}

/** 1491. Average Salary Excluding the Minimum and Maximum Salary
* @param {number[]} salary
* @return {number}
*/
var average = function(salary) {
    // Sort salary array from least to greatest
    salary.sort(function(a, b) {
        return a - b;
      });
      // Remove first and last numbers from array
   salary.splice(0, 1);
   salary.splice((salary.length -1), 1);
   // Declare totalSalary variable for calculating average
   let totalSalary = 0
   // For each number in salary array, add number to running totalSalary variable
   salary.forEach(element => {
    totalSalary += element
   });
   // Return the totalSalary divided by the number of salaries in the array (the average!)
   return (totalSalary / salary.length);
};

/** 191. Number of 1 Bits
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    const numbers = n.toString(2);
    let onesCount = 0;
    const numbersArray = numbers.split("");
    numbersArray.forEach(number => {
        if (number === '1'){
        onesCount += 1
        }
    });
    return onesCount;
};

/**1281. Subtract the Product and Sum of Digits of an Integer
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const number = n.toString();
    const numbersArray = number.split('');
    let digitProduct = 1;
    let digitSum = 0;
    numbersArray.forEach(number => {
        digitProduct *= number
    });
    numbersArray.forEach(number => {
        digitSum += parseInt(number);
    });
    return (digitProduct - digitSum);
    
};

/**217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    return (new Set(nums)).size !== nums.length;
};

/**53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sumArray = [];
    let arraySum = 0;
    nums.forEach(number => {
        arraySum += number;
        sumArray.push(arraySum);
    })
    sumArray.sort(function(a, b) {
        return a - b;
      });
    return sumArray[sumArray.length - 1];
};

/** 1480. Running Sum of 1d Array
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    // Declare new array for returning answer
    let sumArray = [];
    // Declare arraySum to add numbers to
    let arraySum = 0;
    // For each number in nums, add it to arraySum and push arraySum into sumArray
    nums.forEach(number => {
        arraySum += number;
        sumArray.push(arraySum);
    })
    return sumArray;
};

/** 1672. Richest Customer Wealth

 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    // Declare highestAccountTotal variable for returning as answer
    let highestAccountTotal = 0;
    // For each account, do the following...
    accounts.forEach(account => {
        // Declare accountTotal variable for returning as sum of individual accounts
        let accountTotal = 0;
        // For each individual account, add all the numbers inside and store in accountTotal variable
        account.forEach(number => {
            accountTotal += number;
        });
        // If a given accountTotal is more than the current highestAccountTotal, it becomes new highestAccountTotal
        // otherwise highestAccountTotal stays the same
        if (accountTotal > highestAccountTotal) {
            highestAccountTotal = accountTotal;
        }
    })
    return highestAccountTotal;
};