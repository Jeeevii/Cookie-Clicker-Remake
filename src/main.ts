import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Jeevi's Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let cashCounter = 0;

// cash button
const cash = document.createElement("button");
cash.innerHTML = "💵";
cash.style.fontSize = "30pt";
app.append(cash);

// clicker text 

const cashCount = document.createElement("div");
cashCount.innerHTML = `Money Stolen: ${cashCounter}`;
cashCount.style.fontSize = "15pt";
app.append(cashCount);

// hammer upgrade

const hammer = document.createElement("button");
hammer.innerHTML = "🔨";
hammer.style.fontSize = "30pt";
app.append(hammer);

// clicker text incriminating

cash.addEventListener("click", () => {
    cashCounter += 1;
    cashCount.innerHTML = `Money Stolen: ${cashCounter}`;
    
});

