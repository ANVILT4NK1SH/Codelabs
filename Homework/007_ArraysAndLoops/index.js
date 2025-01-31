const darkMode = {
  btn: document.querySelector("#darkBtn"),
  body: document.querySelector("body"),
  header: document.querySelector("#header"),
  
  changeMode: function () {
    if (darkMode.btn.textContent === "Switch to Dark Mode"){
      this.body.style.background = "rgb(50, 51, 71)";
      this.body.style.color = "aliceBlue"
      this.header.style.background = "rgb(13, 0, 98)";
      this.btn.style.background = "rgb(227, 226, 142)";
      this.btn.style.border = "3px solid rgb(50, 51, 71)";
      this.btn.style.color = "rgb(50, 51, 71)";
      this.btn.textContent = "Switch to Light Mode"
    }else{
      this.body.style.background = "aliceblue";
      this.body.style.color = "rgb(50, 51, 71)";
			this.header.style.background = "rgb(227, 226, 142)";
			this.btn.style.background = "rgb(13, 0, 98)";
			this.btn.style.border = "3px solid aliceblue";
			this.btn.style.color = "aliceblue";
      this.btn.textContent = "Switch to Dark Mode"
    }
  },

}

const toDoListProcessor = {
  
  todoList: ["make bed", "brush teeth", "shower"],

  changeList: function () {
    console.log(this.todoList[0])
    this.todoList.push("go to work")
    this.todoList.shift();
    console.log(this.todoList);
  }
}

darkMode.btn.addEventListener("click", () => darkMode.changeMode());

toDoListProcessor.changeList();
