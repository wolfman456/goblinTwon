
const root = document.querySelector("body");
const speed = 100;
let log = document.querySelector("#message");
let mesaageArray = [`Would you like to play a game.`, `GoodBye.`, 
`You wake up in front of a cave. Do you enter the cave or walk away.`,
"A goblin hits you with a rock. You are dead",
"You enter the cave and it forks to the left and the right, which path do you take."];
let i = 0;
let textPosition = 0;



typewriter = () => {
  log.innerHTML
    = mesaageArray[i].substring(0, textPosition)
    + "<span>\u25ae</span>";
  if (textPosition++ != mesaageArray[i].length)
    setTimeout(typewriter, speed);
}

function intro() {
  typewriter();
  const yestBTN = document.createElement("button");
  const notBTN = document.createElement("button");
  yestBTN.innerText = "yes";
  notBTN.innerText = "no";
  root.append(yestBTN, notBTN);
  notBTN.addEventListener('click', () => {
    i = 1;
    log.innerHTML = "";
    typewriter();
  });
  yestBTN.addEventListener('click', () => {
    i = 2;
    yestBTN.remove();
    notBTN.remove();
    optionTwo();
  });
}

function optionTwo() {
  typewriter();
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
  i = 4;
  typewriter();
  const left = document.createElement("button");
  const right = document.createElement("button");
  left.innerText = "left";
  right.innerText = "right";
  root.append(left, right)
  left.addEventListener("click", leave);
  right.addEventListener("click", leave);

}


function leave() {
  i=3;
  typewriter();
  document.body.style.backgroundColor = "red";
  const playAgain = document.createElement('button');
  playAgain.innerText = "Play Again"
  root.append(playAgain);
  playAgain.addEventListener('click', () => {
    playAgain.remove;
    optionTwo();
  })

}
intro();