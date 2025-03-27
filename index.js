const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 6, 2, 7, 5, 3, 6]; // Example array

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // Should log the total sum

