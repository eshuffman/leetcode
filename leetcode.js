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
    const oddNumbersBetween = (((high - low) -1)/2);
    const roundedOddNumbersBetween = Math.ceil(oddNumbersBetween);
    if (low % 2 === 0 && high % 2 === 0) {
        return roundedOddNumbersBetween;
    } else if (low%2 === 1 || high%2 === 1) {
        return (roundedOddNumbersBetween + 1);
    }
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
    salary.sort(function(a, b) {
        return a - b;
      });
   salary.splice(0, 1);
   salary.splice((salary.length -1), 1);

   let totalSalary = 0
   salary.forEach(element => {
    totalSalary += element
   });
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