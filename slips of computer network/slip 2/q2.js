/*. Write a JavaScript code to calculate maximum, minimum, sum and average of numbers
 in an array. */
 
function calculateMinMaxSumAvg(numbersArray) {
    // Initialize variables to store maximum, minimum, sum, and average
    let max = numbersArray[0];
    let min = numbersArray[0];
    let sum = 0;
  
    // Iterate through the array to calculate maximum, minimum, and sum
    for (const number of numbersArray) {
      if (number > max) {
        max = number;
      }
  
      if (number < min) {
        min = number;
      }
  
      sum += number;
    }
  
    // Calculate average
    const average = sum / numbersArray.length;
  
    // Return an object containing maximum, minimum, sum, and average
    return {
      max,
      min,
      sum,
      average,
    };
  }
  
  // Example usage
  const numbersArray = [5, 2, 4, 1, 3];
  const results = calculateMinMaxSumAvg(numbersArray);
  console.log(results);
  