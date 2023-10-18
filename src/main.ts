import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Jeevi's Bank Heist Game";
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

updateDisplay();
