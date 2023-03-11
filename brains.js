
const root = document.querySelector("body");
const speed = 100;
let mesaageArray = {
  "message":["hello what is your name"],
"nameMessage":[`Would you like to play a game ${playerName}?`]};
// let mesaageArray = ["hello what is your name"];
let playerName;
let i = 0;
let textPosition = 0;



typewriter = () => {
  document.querySelector("#message").innerHTML
    = mesaageArray.message[i].substring(0, textPosition)
    + "<span>\u25ae</span>";
  if (textPosition++ != mesaageArray.message[i].length)
    setTimeout(typewriter, speed);
}

function intro() {
  const input = document.createElement("input");
  const startButton = document.createElement("button");
  startButton.innerText = "submit";
  startButton.setAttribute("id", "start");
  input.setAttribute("id", "username");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "type here")
  root.append(input, startButton);

  startButton.addEventListener('click', () => {
    i++
    playerName = document.getElementById("username").value;
    
    input.remove();
    startButton.remove();
    const yestBTN = document.createElement("button");
    const notBTN = document.createElement("button");
    yestBTN.innerText = "yes";
    notBTN.innerText = "no";
    root.append(yestBTN, notBTN);
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
  log.innerText = `GoodBye ${playerName}.`;
}
function optionTwo() {
  log.innerText =
    `You wake up in front of a cave ${playerName}.
  There is a terrible smell coming from the cave.
  Do you enter the cave or walk away.`
  const cave = document.createElement('button');
  cave.innerText = "cave";
  const walk = document.createElement('button');
  walk.innerText = "walk away";
  root.append(cave, walk);

  cave.addEventListener('click', () => {
    cave.remove();
    walk.remove();
    enterCave();
  });

  walk.addEventListener('click', () => {
    cave.remove();
    walk.remove();
    leave();
  });
}

function enterCave() {
  txt = "you enter the cave and smell something funny."
  

}


function leave() {
  document.body.style.backgroundColor = "red";
  log.innerText =
    `A goblin walks up behind you
and hit you over the head with a rock.
you are dead`
  const playAgain = document.createElement('button');
  playAgain.innerText = "Play Again"
  root.append(playAgain);
  playAgain.addEventListener('click', () => {
    playAgain.remove;
    optionTwo();
  })

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function mainLoop() {

  typewriter();
  intro();
}
mainLoop();

// window.addEventListener("load", typewriter);