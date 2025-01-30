//alert('Welcome to My Website!');

let changeTextP = document.querySelector('#changeTextP');

const changeBtn = document.querySelector('#changeTextBtn');

function changeTextHandler() {
  changeTextP.textContent = "You clicked the button!";
}

changeBtn.addEventListener('click', changeTextHandler)


let timeCount = 10;
let time = document.querySelector("#time");
const startStopBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector('#rest-btn');

startStopBtn.addEventListener('click', timerHandler)

function timerHandler () {
  setInterval(function(){
    timeCount--
    console.log(timeCount)
    time.textContent = timeCount;
  }, 
  1000)
  
}

// if (startStopBtn.innerHTML === "Start") {
// function timerHandler() {
//     setInterval(function (){
// 		timeCount--;
// 		startStopBtn.innerHTML = "Stop";
    
// 	}
//   ), 1000;
//   console.log(timeCount)
//   }
// }
//    else startStopBtn.innerHTML = "Start";
    
