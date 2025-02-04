const applyDiscount = (prices, discount, callback) => {
	callback(prices, discount);
};

const discountFunction = (prices, discount) => {
	let discountPrices = prices.map((p) => p - p * discount);
	console.log(discountPrices);
};

applyDiscount([10, 20, 30], 0.1, discountFunction);

const squareAndPrint = (nums) => {
	const squares = nums.map((num) => num * num);
	console.log(squares);
	squares.forEach((num) => {
		console.log(num);
	});
};
squareAndPrint([1, 2, 3, 4, 5]);

const stringReverse = (stringsArray) => {
	const reversedStrings = stringsArray.map((s) => [...s].reverse().join(""));
	console.log(stringsArray);
	console.log(reversedStrings);
};

stringReverse(["Hello", "How are You", "I am well"]);

const oddNumbers = (nums) => {
	const odds = nums.filter((num) => num % 2 !== 0);
	console.log(odds);
};

oddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

const timeFunction = (timeOut, interval) => {
	setTimeout(() => {
		console.log("Task completed!");
	}, timeOut);

	setInterval(() => {
		console.log("Still wating...")
	}, interval);
};

timeFunction(5000, 2000);
