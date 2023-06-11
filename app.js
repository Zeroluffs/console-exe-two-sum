const readline = require('readline');

function findTwoSum(nums, target) {
    const hashTable = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const substractionWeWant = target - num;
  
      if (hashTable.has(substractionWeWant)) {
        result.push([nums[i], nums[hashTable.get(substractionWeWant)]]);
      } else {
        hashTable.set(num, i);
      }
    }
    return result;
  }

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the array separated by commas: ', (arrayInput) => {
  rl.question('Enter the target value: ', (targetValue) => {
    const array = arrayInput.split(',').map(Number);
    const target = Number(targetValue);
    const result = findTwoSum(array, target);
    for (let i = 0; i < result.length; i++) {
        console.log('The array is with two sums: ', result[i]);
    }
      
  });
});