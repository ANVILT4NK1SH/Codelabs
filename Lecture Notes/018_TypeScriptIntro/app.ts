/**
 * Represents a user with basic identifying information.
 */
interface User {
	id: number; // Unique identifier for the user
	name: string; // Full name of the user
	email: string; // User's email address
}

/**
 * Array to store a collection of User objects.
 */
let userArray: User[] = [];

/**
 * Sample user instances.
 */
const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };
const user2: User = { id: 2, name: "Bob", email: "bob@example.com" };

// Populate userArray with initial users
userArray.push(user1, user2);

/**
 * Finds a user by their unique ID.
 * @param ID - The user's unique identifier
 * @returns The first User object matching the ID, or undefined if not found
 */
function findUserById(ID: number): User | undefined {
	const filteredUser: User[] = userArray.filter((user) => user.id === ID);
	return filteredUser[0];
}

console.log(findUserById(1));

/**
 * Checks if a value is a number.
 * @param num - The value to check
 * @returns True if the value is a number, false otherwise
 */
function isNumber(num: any): boolean {
	let numBool: boolean = true;
	if (typeof num !== "number") numBool = false;
	return numBool;
}

let testValue: any = 42;
console.log(isNumber(testValue)); // true

testValue = "Hello";
console.log(isNumber(testValue)); // false

/**
 * Enumerates possible task statuses with descriptive messages.
 */
enum TaskStatus {
	NotStarted = "Task is not started yet.",
	InProgress = "Task is in progress.",
	Completed = "Task has been completed.",
}

/**
 * Tracks the current status of a task.
 */
let currentStatus: TaskStatus = TaskStatus.NotStarted;

/**
 * Updates and logs the current task status.
 * @param status - The new status to set
 */
function updateStatus(status: TaskStatus): void {
	console.log(status);
}

updateStatus(currentStatus); // "Task is not started yet."
updateStatus(TaskStatus.InProgress); // "Task is in progress."
updateStatus(TaskStatus.Completed); // "Task has been completed."

/**
 * Represents a product with its pricing information.
 */
type Product = {
	id: number; // Unique identifier for the product
	name: string; // Name of the product
	price: number; // Price of the product in dollars
};

/**
 * Calculates the total cost of an array of products.
 * @param products - Array of Product objects
 * @returns The sum of all product prices
 */
function calculateTotalCost(products: Product[]): number {
	let total: number = 0;
	products.map((p) => {
		total += p.price;
	});
	return total;
}

/**
 * Array to store a collection of Product objects.
 */
let inventory: Product[] = [];

/**
 * Sample product instances.
 */
const product1: Product = { id: 1, name: "Laptop", price: 1000 };
const product2: Product = { id: 2, name: "Mouse", price: 50 };
const product3: Product = { id: 3, name: "Keyboard", price: 100 };

// Populate inventory with initial products
inventory.push(product1, product2, product3);

console.log(calculateTotalCost(inventory)); // 1150

/**
 * Represents a car with optional features.
 */
interface Car {
	make: string; // Manufacturer of the car
	model: string; // Model name of the car
	year: number; // Year of manufacture
	hasSunroof?: boolean; // Optional: Indicates if the car has a sunroof
}

/**
 * Sample car instances.
 */
const car1: Car = {
	make: "Ford",
	model: "Mustang",
	year: 2024,
	hasSunroof: true,
};
const car2: Car = {
	make: "Chevy",
	model: "Camaro",
	year: 2020,
};

/**
 * Logs a description of the car, including sunroof status if applicable.
 * @param car - The Car object to describe
 */
const describeCar = (car: Car): void => {
	if (car.hasSunroof) {
		console.log(`${car.year} ${car.make} ${car.model} with a sunroof.`);
	} else {
		console.log(`${car.year} ${car.make} ${car.model}`);
	}
};

describeCar(car1); // "2024 Ford Mustang with a sunroof."
describeCar(car2); // "2020 Chevy Camaro"
