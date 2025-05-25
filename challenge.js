/*
May 22 Challenge: Create an inventory system for a game
const categoryItems = ['weapon', 'potion', 'armor'];
const inventory = [
	{name: 'sword', quantity: 3, category: categoryItems[0]},
	{name: 'health potion', quantity: 5, category: categoryItems[1]},
	{name: 'shield', quantity: 2, category: categoryItems[2]},
	{name: 'mana potion', quantity: 4, category: categoryItems[1]},
	{name: 'bow', quantity: 1, category: categoryItems[0]},
];

function addItem(name, quantity, category) {
	const item = inventory.find((item) => item.name === name);
	if (item) {
		item.quantity += quantity;
	} else {
		inventory.push({name, quantity, category});
	}
}

function filterByCategory(category) {
	return inventory.filter((item) => item.category === category);
}
*/

/*
May 23 AM Challenge: Even/odd number check
let number;

function isEven(number) {
	// let check = parseInt(number) == number;
	if (typeof number !== 'number' || Number.isNaN(number)) {
		console.log("We're not a number, silly");
	} else if (number % 2 === 0) {
		console.log("We're even");
	} else {
		console.log("We're an odd one");
	}
}

isEven(null);
*/

/*
Build a very simple “task manager” system.

Each task should have:
	•	title (string)
	•	completed (boolean)
	•	priority (number, 1 = high, 3 = low)

Your goals:
	1.	Store at least 5 tasks in an array
	2.	Write a function that:
	•	Marks a task as completed by its title
	3.	Write a function that:
	•	Filters tasks by priority

Bonus: Write a function that sorts tasks by priority (1 first)

const taskList = [
	{task: 'laundry', completed: true, priority: 3},
	{task: 'coding challenge', completed: false, priority: 1},
	{task: 'eat lunch', completed: true, priority: 2},
	{task: 'create badass future', completed: false, priority: 1},
	{task: 'relax', completed: false, priority: 3},
];

function completeTask(taskName) {
	const task = taskList.find((t) => t.task === taskName);
	if (!task) {
		console.log('Task not found');
		return;
	}
	if (task.completed) {
		console.log('Task already complete!');
		return;
	}
	console.log('Task incomplete... completing now');
	setTimeout(() => {
		task.completed = true;
		console.log('Task now complete!');
	}, 3000);
}

completeTask('coding challenge');
*/

/*
Write a function that takes a number and returns:
	•	"Fizz" if it’s divisible by 3
	•	"Buzz" if it’s divisible by 5
	•	"FizzBuzz" if divisible by both
	•	"Even" if it’s not divisible by 3 or 5, but it’s even
	•	"Odd" if it’s none of the above
	
function check(number) {
	if (number % 3 == 0 && number % 5 == 0) {
		console.log('FizzBuzz');
	} else if (number % 3 == 0) {
		console.log('Fizz');
	} else if (number % 5 == 0) {
		console.log('Buzz');
	} else if (number % 2 == 0) {
		console.log('Even');
	} else console.log('Odd');
}

check(30);

*/

/*
Write a function that takes a color name (string) and returns its associated meaning.

Use this mapping:
	•	"red" → "Stop"
	•	"yellow" → "Caution"
	•	"green" → "Go"
	•	"blue" → "Info"
	•	"purple" → "Mystery"

Any other input should return "Unknown color"

const color = 'RED'.toLowerCase();

switch (color) {
	case 'red':
		console.log('Stop');
		break;
	case 'yellow':
		console.log('Caution');
		break;
	case 'green':
		console.log('Go');
		break;
	case 'blue':
		console.log('Info');
		break;
	case 'purple':
		console.log('Mystery');
		break;
	default:
		console.log('Unknown color');
}
*/

/*
Write a function that takes a number from 0 to 100 and returns a letter grade using switch(true).

Use the following scale:
	•	90–100 → "A"
	•	80–89 → "B"
	•	70–79 → "C"
	•	60–69 → "D"
	•	0–59 → "F"

Any number outside that range should return "Invalid grade"

const grade = 100;

switch (true) {
	case grade >= 90 && grade <= 100:
		console.log('A');
		break;
	case grade >= 80 && grade <= 89:
		console.log('B');
		break;
	case grade >= 70 && grade <= 79:
		console.log('C');
		break;
	case grade >= 60 && grade <= 69:
		console.log('D');
		break;
	case grade >= 0 && grade <= 59:
		console.log('F');
		break;
	default:
		console.log('Invalid grade');
}
*/

/* 
	Find the longest word in a sentence and display the first word and character length
*/

let text = 'this tests the superflous lenght of a string'.split(' ');

let longestText = '';

for (let i = 0; i < text.length; i++) {
	if (text[i].length > longestText.length) {
		longestText = text[i];
	}
}
console.log(longestText);
