const bar = document.querySelector(".bar");
const number = document.querySelector("#value");
const buttons = document.querySelector(".button").children;
console.log(buttons);
let flag = false;
let currVal = 0;
let currSpeed = 0;
let id = 0;
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (event) {
    handleClick(event.target);
  });
}

function handleClick(button) {
  switch (button.name) {
    case "start":
      let val = document.querySelector("#initialValue").value;
      let speed = document.querySelector("#speed").value;
      if (val && speed) {
        startTheProcess(val, speed);
      } else if (val) {
        startTheProcess(val, 1000);
      } else if (speed) {
        startTheProcess(0, speed);
      } else {
        alert("Enter value and speed");
      }
      break;
    case "resume":
      if (flag) alert("Ongoing process");
      else {
        startTheProcess(currVal, currSpeed);
      }
      break;

    case "stop":
      stopTheProcess();
      break;
    default:
      break;
  }
}

function stopTheProcess() {
  clearInterval(id);
  alert("Stopped the process")
  flag = false;
  currVal = 0;
  currSpeed = 0;
}

function startTheProcess(value, speed) {
  flag = true;
  currVal = value;
  currSpeed = speed;
  id = setInterval(changeBar, currSpeed);
  function changeBar() {
    if ((currVal & 1) == 0) {
      currVal /= 2;
    } else {
      currVal = currVal * 3 + 1;
    }
    bar.style.height = `${currVal}px`;
    number.innerHTML = currVal;
  }
}
