// Function to simulate a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function example
async function exampleFunction() {
  try {
    // Awaiting multiple promises
    const result1 = await delay(1000);
    const result2 = await delay(2000);
    // Combining results or handling further logic
    return [result1, result2];
  } catch (error) {
    // Proper error handling
    console.error("An error occurred:", error);
  }
}

// Running the example function
exampleFunction().then(result => {
  console.log("Results:", result);
});
