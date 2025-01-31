const toDoListProcessor = {
	todoList: ["make bed", "brush teeth", "shower"],

	changeList: function () {
		console.log(this.todoList[0]);
		this.todoList.push("go to work");
		this.todoList.shift();
		console.log(this.todoList);
	},
};

toDoListProcessor.changeList();

const countEvenNumbers = {
	numberArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],

	evenNumbers: function (numbers) {
		let total = 0;

		for (i = 0; i < numbers.length; i++) {
			num = numbers[i];
			if (num % 2 === 0) {
				total++;
			}
		}
		console.log(total);
	},
};

countEvenNumbers.evenNumbers(countEvenNumbers.numberArray);

const reverseArray = {
  array: [1,2,3,4,5,6,7,8,9],
  reversedArray: [],

  reverse: function (numbers){
    for(let i = numbers.length-1; i >= 0; i--){
      this.reversedArray.push(numbers[i]);
    }
    console.log(this.reversedArray)
  }

}

reverseArray.reverse(reverseArray.array);

const findLargestNumber = {
  array: [],
  

  makeArray: function () {
    console.log("hello")
    for(let i = 0; i < (Math.floor(Math.random() * 99))+2; i++){
      this.array.push(Math.floor(Math.random() * 101)); 
    }
    console.log(this.array);
    return this.array;
  },

  findLargest: function (numbers) {
    let largest = 0;
    let newVar = 0;

    for(let i = 0; i < numbers.length; i++){
      newVar = numbers[i];

      if(largest < newVar){
        largest = newVar;
      }
    }
    console.log(largest)
  }
}

findLargestNumber.findLargest(findLargestNumber.makeArray());
