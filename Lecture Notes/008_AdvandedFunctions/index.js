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
		console.log("Still wating...");
	}, interval);
};

// timeFunction(5000, 2000);

// const multiplesFunction = (nums) =>{
//   let multiples = [];
//   let k = 0;
//   for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//       if(nums[i] === nums[j] && i!==j){
//         multiples.push(nums[i]);
//       }
//     }
//   }
//   console.log(multiples)
// }

// multiplesFunction([1,1,2,3,4,5,5,5,6,7,8,9])

const duplicatesFunction = (nums) => {
	return nums.reduce((acc, num, index, array)=>{
    if ( array.indexOf(num) !== index && !acc.includes(num)){
      acc.push(num);
    }
    return acc;
  }, []);
};

console.log(duplicatesFunction([1, 2, 3, 2, 4, 5, 6, 4, 7, 4, 2]));

 const findDuplicates = (nums) => {
  let seen = new Set();
  let duplicates = new Set();

  nums.forEach(num => {
    if (seen.has(num)) {
      duplicates.add(num);
    }
    seen.add(num);
  });

  console.log([...duplicates])
  return [...duplicates]
 }

 findDuplicates([1,1,2,3,4,5,1,4,4,6,7,2,8,9])