// Function that returns a multiplier function
const createMultiplier = (factor) => {
	return (number) => number * factor;
};

// Example usage
const double = createMultiplier(2);
const triple = createMultiplier(3);

// Using the multiplier functions
const number = 5;
console.log(`Double of ${number} is: ${double(number)}`); // Output: Double of 5 is: 10
console.log(`Triple of ${number} is: ${triple(number)}`); // Output: Triple of 5 is: 15

// You can also use it directly
const quadruple = createMultiplier(4);
console.log(`Quadruple of ${number} is: ${quadruple(number)}`); // Output: Quadruple of 5 is: 20
