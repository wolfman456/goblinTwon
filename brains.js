
const input = document.createElement("input");
const startButton = document.createElement("button");
startButton.innerText = "submit";
startButton.setAttribute("id", "start");
input.setAttribute("id", "username");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "type here")
let log = document.getElementById("log");
let welcome = "hello what is your name"
let playerName;


function intro() {
  document.body.appendChild(input);
  document.body.appendChild(startButton);

  startButton.addEventListener('click', () => {
    playerName = document.getElementById("username").value;
    log.innerText = `Would you like to play a game ${playerName}?`;
    input.remove();
    startButton.remove();
    const yestBTN = document.createElement("button");
    const notBTN = document.createElement("button");
    yestBTN.innerText = "yes";
    notBTN.innerText = "no";
    document.body.appendChild(yestBTN);
    document.body.appendChild(notBTN);
    notBTN.addEventListener('click', () => {
      yestBTN.remove();
      notBTN.remove();
      optionOne();
    });
    yestBTN.addEventListener('click', () => {
      yestBTN.remove();
      notBTN.remove();
      optionTwo();
    });
  });
}
function optionOne() {
  log.innerText = "GoodBy";
}
function optionTwo() {
  log.innerText = "hello";
}
function mainLoop() {
  log.innerText = welcome;
  intro();


}

mainLoop();

