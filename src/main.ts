import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Average Day in Oakland!";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let cashCounter = 0;

// cash button
const cash = document.createElement("button");
cash.textContent = "💵";
cash.style.fontSize = "25px";
app.append(cash);

// clicker text
const cashCount = document.createElement("div");
cashCount.textContent = `Money Stolen: ${cashCounter}`;
app.append(cashCount);

// clicker text incriminating
cash.addEventListener("click", () => {
    cashCounter += 1;
    updateDisplay();
});

// hammer upgrade
const hammer = document.createElement("button");
hammer.textContent = "🔨";
hammer.style.fontSize = "20px";
hammer.disabled = true;
app.append(hammer);

// hammer description
const hammerDes = document.createElement("div");
hammerDes.textContent = `Use Hammer a hammer to break into a car!`;
app.append(hammerDes);

// upgrade costs
const hammerCost = 10;

// upgrade effect
let passiveClicks = 0;

// check upgrade
function updateHammer() {
  if (cashCounter >= hammerCost) {
    hammer.disabled = false;
    hammer.textContent = "🔨 Buy for 10💵";
  } else {
    hammer.disabled = true;
    hammer.textContent = "🔨 Cost: 10💵";
  }
}

// upgrade handler
hammer.addEventListener("click", () => {
  if (cashCounter >= hammerCost) {
    cashCounter -= hammerCost; // Spend the money
    passiveClicks += 0.5; // increase passive income from hammer
    updateHammer();
  }
});

// continuous counter growth using requestAnimationFrame
function continuousCounterGrowth() {
  cashCounter += passiveClicks / 60; // increment by 1/60 of the passive income per frame
  updateDisplay();
  requestAnimationFrame(continuousCounterGrowth); // continue the loop
}

// start the continuous counter growth loop
continuousCounterGrowth();

// display update
function updateDisplay() {
  cashCount.textContent = `Money Stolen: ${Math.round(cashCounter)}`; // round the cashCounter for display
  updateHammer();
}

// add a setInterval for continuous counter growth
setInterval(() => {
  cashCounter += passiveClicks; // increment by the passive income per second
  updateDisplay();
}, 1000);

updateDisplay();
