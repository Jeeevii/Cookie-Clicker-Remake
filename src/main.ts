import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Average Day in Oakland!";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Initialize clicker
let cashCounter = 0;
// Initialize passive income
let passiveClicks = 0;

// Cash button setup
const cash = document.createElement("button");
cash.textContent = "💵"; // Display cash symbol
cash.style.fontSize = "25px";
app.append(cash);

// Counter for money stolen
const cashCount = document.createElement("div");
cashCount.textContent = `Money Stolen: ${cashCounter}`;
app.append(cashCount);

// Increment money when clicking the cash button
cash.addEventListener("click", () => {
  cashCounter += 1;
  updateDisplay();
});

// Upgrade buttons
const hammer = createUpgradeButton(
  "🔨",
  "Use the hammer to break into a Car!",
  10, // Cost
  0.2, // Passive Clicker
);
app.append(hammer);

const knife = createUpgradeButton(
  "🔪",
  "Use the knife to rob an innocent Civilian!",
  50,
  1,
);
app.append(knife);

const watergun = createUpgradeButton(
  "🔫",
  "Use the water gun to rob your local Dollar Tree!",
  250,
  5,
);
app.append(watergun);

const homies = createUpgradeButton(
  "😎",
  "Get the homies together and loot a Store! Keep it under $950!",
  950,
  100,
);
app.append(homies);

const car = createUpgradeButton(
  "🚗",
  "Use the stolen car to commit insurance fraud!",
  10000,
  1000,
);
app.append(car);

// Function to create upgrade buttons
function createUpgradeButton(
  name: string,
  description: string,
  cost: number,
  income: number,
) {
  const button = document.createElement("button");
  button.textContent = `${name} Buy for ${cost}💵`;
  button.style.fontSize = "20px";
  app.append(button);

  button.addEventListener("click", () => {
    if (cashCounter >= cost) {
      cashCounter -= cost; // Subtract cash when bought
      passiveClicks += income; // Add the passive upgrade
      updateDisplay();
    }
  });

  const descriptionElement = document.createElement("div");
  descriptionElement.textContent = `${description} (Passive Income: ${income}/s)`;
  app.append(descriptionElement);

  return button;
}

// Function to update upgrade button status
function updateItemStatus(button: HTMLButtonElement, cost: number) {
  if (button) {
    if (cashCounter >= cost) {
      button.disabled = false;
      button.textContent = `${button.textContent?.replace("Cost", "Buy")}`;
    } else {
      button.disabled = true;
      button.textContent = `${button.textContent?.replace("Buy", "Cost")}`; // Cash isn't enough to buy
    }
  }
}

// Check and update the status of upgrade buttons
function updateHammer() {
  updateItemStatus(hammer, 10);
  updateItemStatus(knife, 50);
  updateItemStatus(watergun, 250);
  updateItemStatus(homies, 950);
  updateItemStatus(car, 10000);
}

// Continuous counter growth using requestAnimationFrame
function continuousCounterGrowth() {
  cashCounter += passiveClicks / 60;
  updateDisplay();
  requestAnimationFrame(continuousCounterGrowth);
}

// Start the continuous counter growth loop
continuousCounterGrowth();

// Update the display
function updateDisplay() {
  cashCount.textContent = `Money Stolen: ${Math.round(cashCounter)}`;
  updateHammer();
}

// Add a setInterval for continuous counter growth
setInterval(() => {
  cashCounter += passiveClicks;
  updateDisplay();
}, 1000);

updateDisplay();
