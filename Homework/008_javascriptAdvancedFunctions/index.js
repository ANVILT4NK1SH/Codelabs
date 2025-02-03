const arrayTransform = {
	transformArray: function (num, array) {
		let newArray = [];
		array.unshift(num);
		array.pop();
		for (let i = 0; i < array.length; i++) {
			newArray[i] = array[i] + 1;
		}

		console.log(array);
		console.log(newArray);
		return newArray;
	},
};

arrayTransform.transformArray(5, [0, 1, 2, 3, 4]);

const foodPrep = {
	greetCustomer: function () {
		console.log("You food is ready!");
	},

	prepareFood: function (callback) {
		console.log("Preparing food...");
		callback();
	},
};

foodPrep.prepareFood(foodPrep.greetCustomer);

const timeoutCallback = {
	requestData: function (callback) {
		console.log("Requesting data...");
		setTimeout(callback, 2000);
	},

	displayData: function () {
		console.log("Displaying data...");
	},
};

timeoutCallback.requestData(timeoutCallback.displayData);

const square = (x) => x * x;

console.log(square(5));

const multiply = function (a, b) {
	return a * b;
};

const multiply2 = (a, b) => a * b;

console.log(multiply(3, 4));
console.log(multiply2(3, 4));

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => num * num);
console.log(squared);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evensDoubled = numbers2
	.filter((num) => num % 2 === 0)
	.map((num) => num * 2);
console.log(evensDoubled);

const action = () => console.log("Action executed!");
setTimeout(action, 3000);

const repeat = () => console.log("Repeating action!");
setInterval(repeat, 4000);


