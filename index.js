// Define the battery batches array
const batteryBatches = [3, 4, 5, 6, 3, 2, 4, 4]; // Adjusted to sum to 31

// Use reduce() to calculate the total sum
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// Log the output for debugging
console.log("Battery Batches:", batteryBatches);
console.log("Total Batteries:", totalBatteries); // Should log 31
