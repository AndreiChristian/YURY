const caseItems = [
  { name: "Item 1", price: 10, probability: 0.1 },
  { name: "Item 2", price: 20, probability: 0.05 },
  { name: "Item 3", price: 0, probability: 0.85 },
  // Add more items and their probabilities here
];

// Check that the probabilities add up to 1
const tolerance = 1e-6;
const totalProbability = caseItems.reduce(
  (sum, item) => sum + item.probability,
  0
);
if (Math.abs(totalProbability - 1) > tolerance) {
  console.log("Error: Probabilities do not add up to 1!");
} else {
  console.log("Probabilities add up to 1!");
}

// Define the cost of opening the case
const caseCost = 5;

// Define the number of times to simulate the case opening
const numSimulations = 100;

// Define variables to keep track of the results
let totalWinnings = 0;
let totalCost = 0;
let totalProfit = 0;

// Define a function to simulate opening the case
function simulateCaseOpening() {
  // Calculate the total probability of all items
  const totalProbability = caseItems.reduce(
    (sum, item) => sum + item.probability,
    0
  );

  // Choose a random number between 0 and the total probability
  const randNum = Math.random() * totalProbability;

  // Loop through the items and subtract their probabilities from the random number until it reaches 0
  let currentProbability = 0;
  for (const item of caseItems) {
    currentProbability += item.probability;
    if (randNum <= currentProbability) {
      // The current item is the one that was dropped
      return item;
    }
  }
}

// Simulate opening the case multiple times and keep track of the results
for (let i = 0; i < numSimulations; i++) {
  // Open the case
  const droppedItem = simulateCaseOpening();

  // Calculate the cost and profit
  const cost = caseCost;
  const profit = cost - droppedItem.price;

  // Add to the total cost, profit, and winnings
  totalCost += cost;
  totalProfit += profit;
  totalWinnings += cost - profit;
}

// Print the results
console.log(`Total revenue: $${totalCost}`);
console.log(`Total cost: $${totalCost}`);
console.log(`Total profit: $${totalProfit}`);
console.log(`Total winnings: $${totalWinnings}`);
console.log(`Profit margin: ${(totalProfit / totalCost).toFixed(2) * 100}%`);
