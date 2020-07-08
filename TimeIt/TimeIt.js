let x = 1;

let TimeOut = document.getElementById("Buzzer");

function func() {
  let p = document.getElementById("p");
  p.innerText = x;
  x++;
}

function func2() {
  let p = document.getElementById("p");
  p.innerText = x;
  if (x <= 0) {
   x = 0;
    p.innerText = "Time Out!";
    TimeOut.play();
    clearInterval(Timer);
  }else {
    x--;
    }
}

let Timer;
let Reset = document.getElementById("Reset");
let Stop = document.getElementById("Stop");
let Timed = document.getElementById("Timed");
let Input = document.getElementById("Input");

Reset.onclick = function() {
  if (Input.value == "") {
    clearInterval(Timer);
    Timer = setInterval(func, 1000);
    Stop.onclick();
    p.innerText = 0;
    x = 0;
   }else {
     clearInterval(Timer);
     Timer = setInterval(func2, 1000);
     p.innerText = Input.value;
     x = Input.value; 
    }
}

Stop.onclick = function() {
  if (Stop.innerHTML == "Stop") {
    clearInterval(Timer);
    Stop.innerHTML = "Start";
    }else {
      if (Input.value == "") {
        clearInterval(Timer);
        Timer = setInterval(func, 1000);
        Stop.innerHTML = "Stop";
      }else {
         clearInterval(Timer);
         x = Input.value;
         Timer = setInterval(func2, 1000);
         Stop.innerHTML = "Stop";
         Stop.disabled = true;
        }
    }
}

Timed.onclick = function() {
  if (window.getComputedStyle(document.getElementById('Input')).display === "none") {
    Input.style.display = "initial";
    Timed.innerHTML = "Switch To StopWatch";
  } else {
    Input.value = "";
    Stop.disabled = false;
    Input.style.display = "none";
    Timed.innerHTML = "Switch To Timer";
  } 
}